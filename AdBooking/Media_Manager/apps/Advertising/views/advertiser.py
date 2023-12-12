from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect

import logging
logger = logging.getLogger(__name__)

import json
from django.shortcuts import get_object_or_404
from django.shortcuts import render
from ..models.advertising import *
from ..models.orders import *
from ..models.rates import *
from ..models.publications import *
from ..models.permissions import AdAssistant
# import the necessary models needed
from ..models.advertising import Account, SalesPerson, AccountType, MarketCode, IndustryCode, CompanyContact,AdvertiserTaskList
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
    accountTypes= AccountType.objects.all()
    department= CompanyDepartment.objects.all()
    newAccount = Account.objects.last()
    accountInfo=Account.objects.all()
    context = {
        "newAccount": newAccount,
        'accountTypes': accountTypes,
        'department': department,
        'accountInfo': accountInfo
    }

    return render(request, "dashboard.html", context)
def edit_new_advertiser(request):
    if request is None or not request.user.is_authenticated:
        return redirect(login_redirect + "dashboard.html")

    if not request.user.has_perm('BI.advertising_access'):
        return render(request, "dashboard.html",
                      {"access": "deny", "message": "Access denied!", "menu": views.get_sidebar(request)})
    if request.method == 'POST':
        # row = get_object_or_404(Account, pk=request.POST.get('account_id'))
        row = Account.objects.last()
        body = request.body.decode('utf-8')
        data = json.loads(body)

        if data['param'] == 'walmart':
            row.status = data['status']
            row.address = data['address']
            row.website = data['website']
            row.account_type_id = data['accountType']
            row.phone = data['phone']
            row.email = data['email']
            row.save()
            return JsonResponse({"message": "Success!"}, status=200)

        if data['param'] == 'billing':
            row.total_spent = data['billing_total_spent']
            row.billing_address = data['billing_address']
            row.credit_limit = data['credit_limit']
            row.billing_email = data['billing_email']
            row.save()

            return JsonResponse({"message": "Success!"}, status=200)

def taskSetActivity(request):
    if request is None or not request.user.is_authenticated:
        return redirect(login_redirect + "dashboard.html")

    if not request.user.has_perm('BI.advertising_access'):
        return render(request, "dashboard.html",
                      {"access": "deny", "message": "Access denied!", "menu": views.get_sidebar(request)})
    if request.method == 'POST':
        # row = get_object_or_404(Account, pk=request.POST.get('account_id'))
        body = request.body.decode('utf-8')
        data = json.loads(body)
        row = AdvertiserTaskList.objects.get(id=data['id'])
        row.status = 1
        row.save()
        active_Tasks = AdvertiserTaskList.objects.filter(status=1)
        ac_con = list(active_Tasks.values())

        contacts = {
            'active': ac_con,
        }

        return JsonResponse(contacts)
def create_task (request):
    if request is None or not request.user.is_authenticated:
        return redirect(login_redirect + "dashboard.html")

    if not request.user.has_perm('BI.advertising_access'):
        return render(request, "dashboard.html",
                      {"access": "deny", "message": "Access denied!", "menu": views.get_sidebar(request)})

    if request.method == 'POST':
        body = request.body.decode('utf-8')
        data = json.loads(body)

        if data['id'] == 0:
            task = AdvertiserTaskList(
                title=data['title'],
                due_date=data['due_date'],
                priority=data['priority'],
                content=data['content'],
                account_id=data['account_id'],
                note=data['note'],
                complete=0,
                status=1
            )

            task.save()

        if data['id'] != 0:
            row = AdvertiserTaskList.objects.get(id=data['id'])

            row.title = data['title']
            row.due_date = data['due_date']
            row.priority = data['priority']
            row.account_id = data['account_id']
            row.content = data['content']
            row.note = data['note']

            row.save()

        active_Tasks = AdvertiserTaskList.objects.filter(status=1)
        ac_con = list(active_Tasks.values())

        contacts = {
            'active': ac_con,
        }

        return JsonResponse(contacts)

def delete_id_contact (request):
    if request is None or not request.user.is_authenticated:
        return redirect(login_redirect + "dashboard.html")

    if not request.user.has_perm('BI.advertising_access'):
        return render(request, "dashboard.html",
                      {"access": "deny", "message": "Access denied!", "menu": views.get_sidebar(request)})
    if request.method == 'POST':
        body = request.body.decode('utf-8')
        data = json.loads(body)
        obj_to_delete = CompanyContact.objects.get(id=data['id'])

        obj_to_delete.active = 0
        obj_to_delete.save()
        active_contacts = CompanyContact.objects.filter(active=1)
        ac_con = list(active_contacts.values())

        inactive_contacts = CompanyContact.objects.filter(active=0)
        inac_con = list(inactive_contacts.values())

        contacts = {
            'active': ac_con,
            'inactive': inac_con,
        }

        return JsonResponse(contacts)
def taskRemove (request):
    if request is None or not request.user.is_authenticated:
        return redirect(login_redirect + "dashboard.html")

    if not request.user.has_perm('BI.advertising_access'):
        return render(request, "dashboard.html",
                      {"access": "deny", "message": "Access denied!", "menu": views.get_sidebar(request)})
    if request.method == 'POST':
        body = request.body.decode('utf-8')
        data = json.loads(body)
        obj_to_delete = AdvertiserTaskList.objects.get(id=data['id'])

        obj_to_delete.status = 0
        obj_to_delete.save()
        active_Tasks = AdvertiserTaskList.objects.filter(status=1)
        ac_con = list(active_Tasks.values())

        contacts = {
            'active': ac_con,
        }

        return JsonResponse(contacts)

def create_contact (request):
    if request is None or not request.user.is_authenticated:
        return redirect(login_redirect + "dashboard.html")

    if not request.user.has_perm('BI.advertising_access'):
        return render(request, "dashboard.html",
                      {"access": "deny", "message": "Access denied!", "menu": views.get_sidebar(request)})
    if request.method == 'POST':
        body = request.body.decode('utf-8')
        data = json.loads(body)
        print(data)
        contact = CompanyContact(
            account_id=data['account'],
            first_name=data['firstname'],
            last_name=data['lastname'],
            email=data['email'],
            department_id=data['department'],
            phone_number=data['phone'],
            full_name=data['full_name'],
            default=data['default'],
            active=1
        )
        contact.save()
        active_contacts = CompanyContact.objects.filter(active=1)
        ac_con = list(active_contacts.values())

        inactive_contacts = CompanyContact.objects.filter(active=0)
        inac_con = list(inactive_contacts.values())

        contacts = {
            'active': ac_con,
            'inactive': inac_con,
        }

        return JsonResponse(contacts)
def get_id_contact (request) :
    if request is None or not request.user.is_authenticated:
        return redirect(login_redirect + "dashboard.html")

    if not request.user.has_perm('BI.advertising_access'):
        return render(request, "dashboard.html",
                      {"access": "deny", "message": "Access denied!", "menu": views.get_sidebar(request)})
    if request.method == 'POST':
        body = request.body.decode('utf-8')
        data = json.loads(body)
        search_contacts = Account.objects.filter(id=data['id'])
        contacts = list(search_contacts.values())
        return JsonResponse(contacts)
def getTaskList (request):
    if request is None or not request.user.is_authenticated:
        return redirect(login_redirect + "dashboard.html")

    if not request.user.has_perm('BI.advertising_access'):
        return render(request, "dashboard.html",
                      {"access": "deny", "message": "Access denied!", "menu": views.get_sidebar(request)})
    if request.method == 'POST':
        body = request.body.decode('utf-8')
        data = json.loads(body)
        if data['status'] == 'active':
            active_Tasks = AdvertiserTaskList.objects.filter(status=1)
            ac_con = list(active_Tasks.values())

            contacts = {
                'active': ac_con,
            }

            return JsonResponse(contacts)
        if data['status'] == 'complete':
            active_Tasks = AdvertiserTaskList.objects.filter(complete=1)
            ac_con = list(active_Tasks.values())

            contacts = {
                'active': ac_con,
            }

            return JsonResponse(contacts)
def search_filter_contacts (request):
    if request is None or not request.user.is_authenticated:
        return redirect(login_redirect + "dashboard.html")

    if not request.user.has_perm('BI.advertising_access'):
        return render(request, "dashboard.html",
                      {"access": "deny", "message": "Access denied!", "menu": views.get_sidebar(request)})
    if request.method == 'POST':
        body = request.body.decode('utf-8')
        data = json.loads(body)
        if data['param'] == 'all':
            active_contacts = CompanyContact.objects.filter(active=1)
            ac_con = list(active_contacts.values())

            inactive_contacts = CompanyContact.objects.filter(active=0)
            inac_con = list(inactive_contacts.values())

            contacts = {
                'active': ac_con,
                'inactive': inac_con,
            }

            return JsonResponse(contacts)
        if data['param'] == 'search':
            active_contacts = CompanyContact.objects.filter(full_name__contains=data['search_val'], active=1)
            ac_con = list(active_contacts.values())

            inactive_contacts = CompanyContact.objects.filter(full_name__contains=data['search_val'],active=0)
            inac_con = list(inactive_contacts.values())

            contacts = {
                'active': ac_con,
                'inactive': inac_con,
            }
            return JsonResponse(contacts)
        if data['param'] == 'filter':

            if data['status'] == '2':
                active_contacts = CompanyContact.objects.filter(department_id=data['dept'],active=1)
                ac_con = list(active_contacts.values())

                inactive_contacts = CompanyContact.objects.filter(department_id=data['dept'], active=0)
                inac_con = list(inactive_contacts.values())

                contacts = {
                    'active': ac_con,
                    'inactive': inac_con,
                }

                return JsonResponse(contacts)
            if not data['status'] != '2':
                if data['status'] == '1':
                    active_contacts = CompanyContact.objects.filter(department_id=data['dept'], active=1)
                    ac_con = list(active_contacts.values())

                    contacts = {
                        'active': ac_con,
                        'inactive': ''
                    }
                    return JsonResponse(contacts)
                if data['status'] == '0':
                    inactive_contacts = CompanyContact.objects.filter(department_id=data['dept'], active=0)
                    inac_con = list(inactive_contacts.values())

                    contacts = {
                        'active': '',
                        'inactive': inac_con
                    }
                    return JsonResponse(contacts)