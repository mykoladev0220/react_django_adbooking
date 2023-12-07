from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect

import logging
logger = logging.getLogger(__name__)

import json

from ..models.advertising import *
from ..models.orders import *
from ..models.rates import *
from ..models.publications import *
from ..models.permissions import AdAssistant
# import the necessary models needed
from ..models.advertising import Account, SalesPerson, AccountType, MarketCode, IndustryCode
from .... import views
from ..forms import *
from django.core import serializers
login_redirect = "/login/?next="

daysOfTheWeek = ['monday', 'tuesday', 'wednesday',
                     'thursday', 'friday', 'saturday', 'sunday']

def advertiser_dashboard(request):
    if request is None or not request.user.is_authenticated:
        return redirect(login_redirect + "advertising")

    if not request.user.has_perm('BI.advertising_access'):
        return render(request, "advertising.html", {"access": "deny", "message": "Access denied!", "menu": views.get_sidebar(request)})

    accountTypeQuery = AccountType.objects.all()
    accountTypeList = serializers.serialize('json', accountTypeQuery)

    context = {
        "accountTypes": accountTypeQuery,
        "accountTypeList": accountTypeList,
    }

    return render(request, "dashboard.html", context)
def advertiser_dashboard_order_history(request):
    if request is None or not request.user.is_authenticated:
        return redirect(login_redirect + "advertising")

    if not request.user.has_perm('BI.advertising_access'):
        return render(request, "advertising.html", {"access": "deny", "message": "Access denied!", "menu": views.get_sidebar(request)})

    # salespersonList = SalesPerson.objects.all()
    # numReps = len(salespersonList)

    context = {

    }

    return render(request, "dashboard_order_history.html", context)
def advertiser_dashboard_activity(request):
    if request is None or not request.user.is_authenticated:
        return redirect(login_redirect + "advertising")

    if not request.user.has_perm('BI.advertising_access'):
        return render(request, "advertising.html", {"access": "deny", "message": "Access denied!", "menu": views.get_sidebar(request)})

    # salespersonList = SalesPerson.objects.all()
    # numReps = len(salespersonList)

    context = {

    }

    return render(request, "dashboard_activity.html", context)

