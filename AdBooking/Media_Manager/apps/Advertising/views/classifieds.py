from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponseRedirect, JsonResponse
from django.forms import model_to_dict
from django.templatetags.static import static
from django.contrib.auth.models import User
from django.core.files.storage import FileSystemStorage
from ..helpers import is_ajax
import json
from math import floor
import os
from datetime import datetime, date, timedelta
from django.core import serializers

import logging

logger = logging.getLogger(__name__)

from .... import views

# import the necessary models needed
from ..models.advertising import Account, SalesPerson, AccountType, MarketCode, IndustryCode
from ..models.publications import Publication, PublicationRunDay, getRunDays
from ..models.classifieds import ClassifiedAd, ClassifiedGraphic, Classification, ClassifiedAdjustment, ClassifiedRate, \
    ClassifiedRatePublication, ClassifiedPublication, ClassifiedStyling, getClassifiedRates, ClassifiedPublicationRate, \
    ClassifiedAdType, ClassifiedPublicationDate, UploadGraphicsPermission, UploadGraphic, DeleteGraphicsPermission, \
    ClassifiedAdSize, ClassifiedCampaignSummary
from ..models.permissions import isAdminOrManager, ManagerOverride, AccountAccess

from ..helpers import daysOfTheWeek, weekdayDict, getDatesBetween

# import the necessary functions needed
from ..models.permissions import getPublicationAccess

from ..forms import ClassifiedsContentForm, AdvertisingAccountForm

login_redirect = "/login/?next="


# uploadUrl = '/var/www/Dev_Media_Manager/static/dist/img/advertising/'
# uploadUrl = static('dist/img/advertising/')

def list_all_classifications(request):
    classificationList = Classification.objects.all()

    activeClassificationList = []
    inactiveClassificationList = []
    for classification in classificationList:
        if classification.active:
            activeClassificationList.append(classification)
        else:
            inactiveClassificationList.append(classification)

    context = {
        "access": "allow",
        "message": "",
        "groups": ', '.join(views.get_groups(request)),
        "menu": views.get_sidebar(request),
        "classificationList": classificationList,
        "activeClassificationList": activeClassificationList,
        "inactiveClassificationList": inactiveClassificationList
    }

    return render(request, "classifieds/ListAllClassifications.html", context)


def list_classifieds(request):
    if request is None or not request.user.is_authenticated:
        return redirect(login_redirect + "advertising")

    if not request.user.has_perm('BI.advertising_access'):
        return render(request, "advertising.html",
                      {"access": "deny", "message": "Access denied!", "menu": views.get_sidebar(request)})

    lastFiveDays = datetime.today() - timedelta(days=5)
    classifiedsList = ClassifiedAd.objects.filter(date_created__gte=lastFiveDays).order_by('-date_created')

    context = {
        "access": "allow",
        "message": "",
        "groups": ', '.join(views.get_groups(request)),
        "menu": views.get_sidebar(request),
        "classifiedsList": classifiedsList
    }

    return render(request, "classifieds/ListClassifieds.html", context)

def create_advertiser(request):
    if request is None or not request.user.is_authenticated:
        return redirect(login_redirect + "advertising")

    if not request.user.has_perm('BI.advertising_access'):
        return render(request, "advertising.html",
                      {"access": "deny", "message": "Access denied!", "menu": views.get_sidebar(request)})

    accountTypeQuery = AccountType.objects.all()
    accountTypeList = serializers.serialize('json', accountTypeQuery)

    marketCodeQuery = MarketCode.objects.all()
    marketCodeList = serializers.serialize('json', marketCodeQuery)

    salesPersonQuery = SalesPerson.objects.all()
    salesPersonList = serializers.serialize('json', salesPersonQuery)

    context = {
        "accountTypes": accountTypeQuery,
        "accountTypeList": accountTypeList,
        "marketCodes": marketCodeQuery,
        "marketCodeList": marketCodeList,
        "salesPersons": salesPersonQuery,
        "salesPersonList": salesPersonList
    }

    return render(request, "CreateNewAdvertiser.html", context)

def register_advertiser(request):
    if request is None or not request.user.is_authenticated:
        return JsonResponse({"message": "Error. Access forbidden."}, status=403)

    if not request.user.has_perm('BI.advertising_access'):
        return JsonResponse({"message": "Error. Access forbidden."}, status=403)

    if request.method == 'POST':
        body = request.body.decode('utf-8')
        data = json.loads(body)

        modal = Account()

        try:
            accountId = data['accountType']
            account = AccountType.objects.get(pk=accountId)
        except Account.DoesNotExist:
            account = None

        try:
            industryCodeId = data['marketCode']
            industryCode = IndustryCode.objects.get(pk=industryCodeId)
        except Account.DoesNotExist:
            industryCode = None

        try:
            salesPersonId = data['salesPerson']
            salesPerson = SalesPerson.objects.get(pk=salesPersonId)
        except Account.DoesNotExist:
            salesPerson = None

        modal.account_type = account
        modal.contact_name = data['firstName'] + data['lastName']
        modal.name = data['businessName']
        modal.address = data['address']
        modal.city = data['city']
        modal.state = data['state']
        modal.zip_code = data['zipCode']
        modal.phone = data['phoneNumber']
        modal.email = data['email']
        modal.website = data['website']
        modal.industry_code = industryCode
        modal.sales_person = salesPerson
        modal.submitter = data['submitter']
        modal.legacy_id = data['legacyId']
        modal.billing_email = data['bilEmail']
        modal.billing_address = data['bilAddress']
        modal.billing_city = data['bilCity']
        modal.billing_state = data['bilState']
        modal.billing_zip_code = data['bilZipCode']

        modal.save()

        return JsonResponse({'success': "Successful!"})
    else:
        return JsonResponse({'error': 'Invalid request'})

def create_classified_ad(request):
    if request is None or not request.user.is_authenticated:
        return redirect(login_redirect + "advertising")

    if not request.user.has_perm('BI.advertising_access'):
        return render(request, "advertising.html",
                      {"access": "deny", "message": "Access denied!", "menu": views.get_sidebar(request)})

    accounts = [row.account for row in AccountAccess.objects.filter(user=request.user.id)]

    publications = Publication.objects.all()
    publicationsList = serializers.serialize('json', publications)

    salesPersonQuery = SalesPerson.objects.all()
    salesPersonList = serializers.serialize('json', salesPersonQuery)

    adTypes = ClassifiedAdType.objects.all()

    adSizes = ClassifiedAdSize.objects.all()

    adjustments = ClassifiedAdjustment.objects.all()

    rating = ClassifiedRate.objects.all()
    ratingList = serializers.serialize('json', rating)

    form = ClassifiedsContentForm()

    classificationList = Classification.objects.filter(active=True)

    fileList = [model_to_dict(file) for file in UploadGraphic.objects.filter(active=True)]

    for file in fileList:
        file['file_path'] = static('dist/img/advertising/') + file['file'].name  # here

    if request.method == 'POST':
        errors = []

        reqData = json.loads(request.body.decode('utf-8'))
        # print(reqData)

        try:
            classificationId = reqData['classification'].split(' - ')[0]
            classification = Classification.objects.get(code=classificationId)
        except Classification.DoesNotExist:
            classification = None

        try:
            salespersonId = reqData['salesperson'].split(' - ')[0]
            salesperson = SalesPerson.objects.get(pk=salespersonId)
        except SalesPerson.DoesNotExist:
            salesperson = None

        new_classified = ClassifiedAd(classification=classification, submitter=reqData['Ad Taker/Submitter'],
                                      salesperson=salesperson, notes=reqData['notes'], content=reqData['text'],
                                      price=reqData['Total Price'], line_count=reqData['Total Lines'],
                                      start_date=date.today())

        if reqData['account']:
            try:
                accountId = reqData['account'].split(' - ')[0]
                account = Account.objects.get(pk=accountId)
            except Account.DoesNotExist:
                account = None

            new_classified.account = account
        else:
            new_classified.name = reqData['name']
            new_classified.email = reqData['email']
            new_classified.phone = reqData['phone']

        if reqData['size'] not in ['Quarter Page', 'Half Page']:
            columnString = reqData['size'].split(' ')
            new_classified.size = 'Column Based'
            new_classified.columns = columnString[0]
            new_classified.column_length = columnString[3]

            if len(columnString) == 6:
                new_classified.conversion_unit = columnString[4] + ' ' + columnString[5][:-1]
            else:
                new_classified.conversion_unit = columnString[4][:-1]
        else:
            new_classified.size = reqData['size']

        try:
            adTypeCode = reqData['Ad Type'].split(" - ")[0]
            adType = ClassifiedAdType.objects.get(code=adTypeCode)
        except ClassifiedAdType.DoesNotExist:
            adType = None

        new_classified.ad_type = adType

        new_classified.save()

        print('Classified Ad #' + str(new_classified.id) + ' created by ' + request.user.username)
        logging.info('Classified Ad #' + str(new_classified.id) + ' created by ' + request.user.username)

        """
            TODO - refactor this section to make less database save() calls 
            - each iteration it keeps re-setting the start date and end date for the new classified ad
        """
        dateString = reqData['dates'].split(" ")

        # loop through the publications ids
        for pubId in reqData['publicationIds']:
            try:
                publication = Publication.objects.get(pk=pubId)

                adPublication = ClassifiedPublication(classified=new_classified, publication=publication)
                adPublication.save()
            except Publication.DoesNotExist:
                print('Error. Publication with id: ' + str(pubId) + ' does not exist. Continuing to next iteration.')
                continue

            # get the run days for each publication 
            runDays = getRunDays(publication)

            # if the user chose recurring dates 
            if len(dateString) > 1 and dateString[1] in ['days', 'weeks', 'months', 'insertions']:
                # get the recurring amount and the time period 
                recurrAmount = int(dateString[0])
                recurrTimePeriod = dateString[1]

                # set the start date for the classified ad 
                recurrStartDate = datetime.strptime(dateString[3], '%Y-%m-%d')

                new_classified.recurring = True
                new_classified.recurring_amount = dateString[0] + ' ' + dateString[1]
                new_classified.start_date = recurrStartDate

                if recurrTimePeriod == 'days':
                    endDate = recurrStartDate + timedelta(days=recurrAmount)

                elif recurrTimePeriod == 'weeks':
                    endDate = recurrStartDate + timedelta(weeks=recurrAmount)

                elif recurrTimePeriod == 'months':
                    numDays = floor(recurrAmount * 30.436875)  # days in a month
                    endDate = recurrStartDate + timedelta(days=numDays)

                elif recurrTimePeriod == 'insertions':
                    # get the current weekday
                    daysLeft = int(dateString[0])
                    currDate = recurrStartDate

                    # loop through the run days and get the dates for the next insertions
                    while daysLeft > 0:
                        nextDate = currDate + timedelta(days=1)
                        nextWeekday = nextDate.weekday()

                        if daysLeft == 1:
                            new_classified.end_date = nextDate

                        if daysOfTheWeek[nextWeekday] in runDays:
                            classifiedRunDate = ClassifiedPublicationDate(classified=new_classified,
                                                                          publication=publication, date=nextDate)
                            classifiedRunDate.save()

                            daysLeft -= 1
                            currDate = nextDate
                        else:
                            currDate = nextDate
                            continue

                    continue

                # get the dates in between and loop through them
                new_classified.end_date = endDate.date()
                daysBetween = getDatesBetween(new_classified.start_date.date(), endDate.date())

                # loop through the given dates in between 
                for day in daysBetween:
                    weekday = daysOfTheWeek[day.weekday()]

                    # if the current loop date is a run day for that publication
                    if weekday in runDays and weekdayDict[weekday] in reqData['weekday-array']:
                        # save a record of it in the database
                        classifiedRunDate = ClassifiedPublicationDate(classified=new_classified,
                                                                      publication=publication, date=day)
                        classifiedRunDate.save()

            # if the user did not choose recurring dates and instead used the datepicker to choose dates
            else:
                dateList = dateString[0].split(",")

                # set the start and end dates from the first and last indexes of the dateString 
                new_classified.start_date = dateList[0]
                new_classified.end_date = dateList[len(dateList) - 1]

                # daysBetween = getDatesBetween(new_classified.start_date, new_classified.end_date)
                for dateStr in dateList:

                    dateObj = datetime.strptime(dateStr, '%Y-%m-%d')
                    weekday = daysOfTheWeek[dateObj.weekday()]

                    if 'weekday-array' in reqData:
                        if weekday in runDays and weekdayDict[weekday] in reqData['weekday-array']:
                            # save a record of it in the database
                            classifiedRunDate = ClassifiedPublicationDate(classified=new_classified,
                                                                          publication=publication, date=dateObj)
                            classifiedRunDate.save()

        new_classified.save()

        for pubName, rateData in reqData['publication-rates'].items():
            try:
                publication = Publication.objects.get(name=pubName)
            except Publication.DoesNotExist:
                errors.push('Cannot find publication: ' + pubName + ' (Classified Ad #' + str(new_classified.id) + ')')
                continue

            rateId = rateData['rate']['id']
            rateName = rateData['rate']['name']

            try:
                classifiedRate = ClassifiedRate.objects.get(pk=rateId)
            except ClassifiedRate.DoesNotExist:
                errors.push(
                    'Cannot find classified rate: ' + rateId + ' (Classified Ad #' + str(new_classified.id) + ')')
                continue

            ratePub = ClassifiedPublicationRate(classified=new_classified, publication=publication, rate=classifiedRate)
            ratePub.save()

        try:
            user = User.objects.get(username=request.user.username)
        except Account.DoesNotExist:
            return JsonResponse({"message": "Error. Cannot find user"}, status=200)

        notes = 'Manager override needed for account #' + str(
            new_classified.account.id) + ' because account is not established'

        managerOverride = ManagerOverride(name=reqData['name'], created_by=user, manager=user, notes=notes)
        managerOverride.save()

        styling = ClassifiedStyling(classified=new_classified)
        if 'frameWidth' in reqData:
            styling.frameWidth = reqData['frameWidth']

        if 'insetAmount' in reqData:
            styling.insetAmount = reqData['insetAmount']

        if 'text-styling' in reqData:
            styling.style_tag = reqData['text-styling']

        for image in reqData['graphics']:
            classifiedGraphic = ClassifiedGraphic(classified=new_classified, image=image)
            classifiedGraphic.save()

        styling.save()

        return JsonResponse({"message": "Success. Classified Ad created!", "id": new_classified.id}, status=200)

    context = {
        "access": "allow",
        "message": "",
        "groups": ', '.join(views.get_groups(request)),
        "menu": views.get_sidebar(request),
        "accounts": accounts,
        "publications": publications,
        "publicationsList": publicationsList,
        "salespersonList": salesPersonList,
        "salesPersonQuery": salesPersonQuery,
        "classificationList": classificationList,
        "contentForm": ClassifiedsContentForm(),
        "fileList": fileList,
        "form": form,
        "adTypes": adTypes,
        "adSizes": adSizes,
        "adjustments": adjustments,
        "rating": rating,
        "ratingList": ratingList,
    }

    return render(request, "CreateNewClassified.html", context)


def view_classified_ad(request, classifiedId):
    if request is None or not request.user.is_authenticated:
        return redirect(login_redirect + "advertising")

    if not request.user.has_perm('BI.advertising_access'):
        return render(request, "advertising.html",
                      {"access": "deny", "message": "Access denied!", "menu": views.get_sidebar(request)})

    adminOrManager = isAdminOrManager(request.user.id)

    classified = get_object_or_404(ClassifiedAd, pk=classifiedId)

    if date.today() > classified.end_date:
        classified.status = 'inactive'
        classified.save()

    styling = ClassifiedStyling.objects.get(classified=classified)

    message = request.user.username + ' accessed classified #' + str(classified.id)
    print(message)
    logging.info(message)

    context = {
        "access": "allow",
        "message": "",
        "groups": ', '.join(views.get_groups(request)),
        "menu": views.get_sidebar(request),
        "classified": classified,
        "styling": styling,
        "today": datetime.now() + timedelta(days=-3),
        "adminOrManager": adminOrManager
    }

    return render(request, "classifieds/ViewClassified.html", context)


def edit_classified_ad(request, classifiedId):
    if request is None or not request.user.is_authenticated:
        return redirect(login_redirect + "advertising")

    if not request.user.has_perm('BI.advertising_access'):
        return render(request, "advertising.html",
                      {"access": "deny", "message": "Access denied!", "menu": views.get_sidebar(request)})

    classified = get_object_or_404(ClassifiedAd, pk=classifiedId)

    classified.start_date = classified.start_date.strftime('%Y-%m-%d')
    classified.end_date = classified.end_date.strftime('%Y-%m-%d')

    dates = ClassifiedPublicationDate.objects.filter(classified=classified)
    dateArray = [date.date[:10] for date in dates]

    isRecurring = classified.recurring
    if classified.recurring:
        recurringString = classified.recurring_amount.split(" ")
        recurringAmount = int(recurringString[0])
        recurringTimePeriod = recurringString[1]
    else:
        recurringAmount = None
        recurringTimePeriod = None

    accounts = [row.account for row in AccountAccess.objects.filter(user=request.user.id)]
    salespersonList = SalesPerson.objects.all()
    classifications = Classification.objects.all()
    adTypes = ClassifiedAdType.objects.all()

    publications = Publication.objects.all()

    selectedTypeId = classified.ad_type.id if classified.ad_type else None

    adPublications = []
    selectedRates = []
    for row in ClassifiedPublicationRate.objects.filter(classified=classified):
        adPublications.append(row.publication.id)
        selectedRates.append({
            "rate": row.rate.id,
            "publication": row.publication.id
        })

    if request.method == 'POST':
        reqData = request.POST.dict()
        # print(reqData)

        if 'account' in reqData:
            classified.account = Account.objects.get(pk=reqData['account'])

        classified.salesperson = SalesPerson.objects.get(pk=reqData['salesperson'])
        classified.submitter = reqData['submitter']
        classified.classification = Classification.objects.get(pk=reqData['classification'])
        classified.ad_type = ClassifiedAdType.objects.get(pk=reqData['adType'])

        # classified.start_date = reqData['start_date']
        # classified.end_date = reqData['end_date']

        classified.start_date = reqData['start_date']

        if 'recurring' in reqData:
            classified.recurring = True
            classified.recurring_amount = reqData['recurring-amount'] + ' ' + reqData['recurring-time']

            # TODO - add a check to make sure a value is set for recurring amount and the recurring time period before saving the model

            # recurrStartDate = datetime.strptime(dateString[3], '%Y-%m-%d')

            if reqData['recurring-time'] == 'days':
                classified.end_date = classified.start_date + timedelta(days=reqData['recurring-amount'])

            elif reqData['recurring-time'] == 'weeks':
                classified.end_date = classified.start_date + timedelta(weeks=reqData['recurring-amount'])

            elif reqData['recurring-time'] == 'months':
                numDays = floor(reqData['recurring-amount'] * 30.436875)
                classified.end_date = classified.start_date + timedelta(days=numDays)
        else:
            classified.recurring = False
            classified.recurring_amount = ''

            # classified.end_date = reqData['end_date']

        classified.status = reqData['status']
        classified.notes = reqData['notes']

        sizeDict = {
            "quarter_page": "Quarter Page",
            "half_page": "Half Page",
            'column_based': "Column Based"
        }

        if reqData['size'] not in ['quarter_page', 'half_page']:
            classified.columns = reqData['columns']
            classified.size = 'Column Based'
        else:
            classified.size = sizeDict[reqData['size']]
            classified.columns = 0

        classified.save()

        return HttpResponseRedirect('/advertising/classifieds/' + str(classified.id))

    context = {
        "access": "allow",
        "message": "",
        "groups": ', '.join(views.get_groups(request)),
        "menu": views.get_sidebar(request),
        "classified": classified,
        "accounts": accounts,
        "salespersonList": salespersonList,
        "classifications": classifications,
        "publications": publications,
        "adPublications": adPublications,
        "selectedRates": selectedRates,
        "adTypes": adTypes,
        "selectedTypeId": selectedTypeId,
        "dateArray": dateArray
    }

    if classified.recurring:
        context["isRecurring"] = isRecurring
        context["recurringAmount"] = int(recurringString[0]),
        context["recurringTimePeriod"] = recurringTimePeriod

    return render(request, "classifieds/EditClassified.html", context)


def view_classifieds_graphics(request):
    if request is None or not request.user.is_authenticated:
        return redirect(login_redirect + "advertising")

    if not request.user.has_perm('BI.advertising_access'):
        return render(request, "advertising.html",
                      {"access": "deny", "message": "Access denied!", "menu": views.get_sidebar(request)})

    try:
        user = User.objects.get(id=request.user.id)
    except User.DoesNotExist:
        return HttpResponseRedirect('/advertising')

    graphicsList = UploadGraphic.objects.all()
    activeGraphicsList = []
    inactiveGraphicsList = []
    for graphic in graphicsList:
        graphic.file_path = graphic.file_path  # .replace('static', '') #here
        graphic.file_name = os.path.basename(graphic.file_path)

        if graphic.active:
            activeGraphicsList.append(graphic)
        else:
            inactiveGraphicsList.append(graphic)

    hasUploadPermission = UploadGraphicsPermission.objects.filter(user=user).exists() or request.user.is_superuser
    hasDeletePermission = DeleteGraphicsPermission.objects.filter(user=user).exists() or request.user.is_superuser

    context = {
        "access": "allow",
        "message": "",
        "groups": ', '.join(views.get_groups(request)),
        "menu": views.get_sidebar(request),
        "users": User.objects.all(),
        "hasUploadPermission": hasUploadPermission,
        "hasDeletePermission": hasDeletePermission,
        "activeGraphicsList": activeGraphicsList,
        "inactiveGraphicsList": inactiveGraphicsList
    }

    return render(request, "classifieds/graphics/ListClassifiedGraphics.html", context)


def classified_graphics_action(request):
    if request is None or not request.user.is_authenticated:
        return JsonResponse({"message": "Error. Access forbidden."}, status=403)

    if not request.user.has_perm('BI.advertising_access'):
        return JsonResponse({"message": "Error. Access forbidden."}, status=403)

    # fileDir = 'static/dist/img/advertising/'
    fileDir = static('dist/img/advertising/')
    # fileDir = '/var/www/Dev_Media_Manager'
    staticPath = '/static/dist/img/advertising/'  # here

    user = User.objects.get(id=request.user.id)

    if request.method == 'POST':
        if request.FILES:
            reqFiles = request.FILES
            upload_file = reqFiles['image'] if 'image' in reqFiles else None
            if upload_file:
                fs = FileSystemStorage(location=fileDir + staticPath, base_url=fileDir + staticPath)  # here
                file = fs.save(upload_file.name, upload_file)
                fileurl = fs.url(file)

                uploadedGraphic = UploadGraphic(file_path=str(fileDir + staticPath), local_path=staticPath,
                                                uploaded_by=user, file=file)  # here
                uploadedGraphic.save()

                return JsonResponse({"message": "Success"}, status=200)
            else:
                print('Cannot find image. Please try again.')

        else:
            reqData = json.loads(request.body.decode('utf-8'))
            reqType = reqData['type']

            if reqType not in ['delete', 'active']:
                return JsonResponse({"message": "Error. Cannot process request. "}, error=400)

            # get the graphic id from the request body 
            graphicId = reqData['graphicId'] if 'graphicId' in reqData else 0

            # verify the graphic is a valid graphic
            try:
                uploadedGraphic = UploadGraphic.objects.get(pk=graphicId)
            except UploadGraphic.DoesNotExist:
                return JsonResponse(
                    {"message": "Error. Cannot find the selected graphic in the database. Please try again."},
                    status=404)

            # make sure the file exists in the file system
            # fileExists = os.path.isfile(uploadedGraphic.file_path + uploadedGraphic.file.name)
            fileExists = os.path.isfile(uploadedGraphic.file_path)

            # if the file doesnt exist, return an error message 
            if not fileExists:
                return JsonResponse(
                    {"message": "Error. Cannot find the selected graphic in the directory. Please try again."},
                    status=404)

            # if the file does exist
            else:
                if reqType == 'delete':
                    hasDeletePermission = DeleteGraphicsPermission.objects.filter(user=user).exists()
                    if not hasDeletePermission:
                        return JsonResponse({"message": "Error. You do not have permission to delete graphics. "},
                                            status=403)

                    else:
                        # mark the graphic as inactive 
                        uploadedGraphic.active = False
                        uploadedGraphic.save()

                    return JsonResponse({"message": "Success! That graphic has been marked as inactive."}, status=200)

                else:
                    # mark the graphic as active 
                    uploadedGraphic.active = True
                    uploadedGraphic.save()

                    return JsonResponse({"message": "Success! That graphic is now active."}, status=200)

    else:
        return JsonResponse({"message": "Error. Method not implemented."}, status=405)


def user_upload_permission(request):
    if request is None or not request.user.is_authenticated:
        return JsonResponse({"message": "Error. Access forbidden."}, status=403)

    if not request.user.has_perm('BI.advertising_access'):
        return JsonResponse({"message": "Error. Access forbidden."}, status=403)

    if request.method == 'GET':
        # TODO - loop through User table and include all superuser ids in permissionList
        permissionList = [permission.user.id for permission in UploadGraphicsPermission.objects.all()]

        return JsonResponse({"message": "Success", "permission_list": permissionList}, status=200)
    elif request.method == 'POST':
        reqData = json.loads(request.body.decode('utf-8'))

        try:
            user = User.objects.get(id=reqData['userId'])
        except User.DoesNotExist:
            return JsonResponse({"message": "Error. Cannot find currently logged in user. Please try again."},
                                status=200)

        # checking to see if the user currently has the upload permission
        hasPermission = UploadGraphicsPermission.objects.filter(user=user).exists()

        # if the user has upload permission and the AJAX request is granting permission
        if hasPermission and reqData['hasPermission']:
            return JsonResponse({"message": "User already has upload permission"}, status=200)

        # if the user does not already have the upload permission and the AJAx request is granting the permission
        if not hasPermission and reqData['hasPermission']:
            permission = UploadGraphicsPermission(user=user, can_upload_graphics=True)
            permission.save()

            logging.info(request.user.username + ' added upload permission from user ' + user.username)
            print(request.user.username + ' added upload permission from user ' + user.username)

            return JsonResponse({"message": "Successfully granted upload permission to: " + user.username}, status=200)

        # if the user has the upload permission and the AJAX request is removing the permission
        if hasPermission and not reqData['hasPermission']:
            permission = UploadGraphicsPermission.objects.get(user=user)
            permission.delete()

            logging.info(request.user.username + ' removed upload permission from user ' + user.username)
            print(request.user.username + ' removed upload permission from user ' + user.username)

            return JsonResponse({"message": "Successfully removed upload permission from " + user.username})

        return JsonResponse({"message": "Success"}, status=200)
    else:
        return JsonResponse({"message": "Error. Method not implemented."}, status=405)


def user_delete_permission(request):
    if request is None or not request.user.is_authenticated:
        return JsonResponse({"message": "Error. Access forbidden."}, status=403)

    if not request.user.has_perm('BI.advertising_access'):
        return JsonResponse({"message": "Error. Access forbidden."}, status=403)

    if request.method == 'GET':
        # TODO - loop through User table and include all superuser ids in permissionList
        permissionList = [permission.user.id for permission in DeleteGraphicsPermission.objects.all()]

        return JsonResponse({"message": "Success", "permission_list": permissionList}, status=200)
    elif request.method == 'POST':
        reqData = json.loads(request.body.decode('utf-8'))

        try:
            user = User.objects.get(id=request.user.id)
        except User.DoesNotExist:
            return JsonResponse({"message": "Error. Cannot find currently logged in user. Please try again."},
                                status=200)

        # checking to see if the user currently has the delete permission
        hasDeletePermission = DeleteGraphicsPermission.objects.filter(user=user).exists()

        # if the user has delete permission and the AJAX request is granting permission
        if hasDeletePermission and reqData['hasDeletePermission']:
            return JsonResponse({"message": "User already has delete permission"}, status=200)

        # if the user does not already have the delete permission and the AJAx request is granting the permission
        if not hasDeletePermission and reqData['hasDeletePermission']:
            permission = DeleteGraphicsPermission(user=user)
            permission.save()

            logging.info(request.user.username + ' added delete permission from user ' + user.username)
            print(request.user.username + ' added delete permission from user ' + user.username)

            return JsonResponse({"message": "Succesfully granted delete permission to: " + user.username}, status=200)

        # if the user has the delete permission and the AJAX request is removing the permission
        if hasDeletePermission and not reqData['hasDeletePermission']:
            permission = DeleteGraphicsPermission.objects.get(user=user)
            permission.delete()

            logging.info(request.user.username + ' removed delete permission from user ' + user.username)
            print(request.user.username + ' removed delete permission from user ' + user.username)

            return JsonResponse({"message": "Sucessfully removed delete permission from " + user.username})

        return JsonResponse({"message": "Success"}, status=200)
    else:
        return JsonResponse({"message": "Error. Method not implemented."}, status=405)


def create_classification(request):
    if request is None or not request.user.is_authenticated:
        return JsonResponse({"message": "Error. Access forbidden."}, status=403)

    if not request.user.has_perm('BI.advertising_access'):
        return JsonResponse({"message": "Error. Access forbidden."}, status=403)

    if request.method == 'POST':
        reqData = json.loads(request.body.decode('utf-8'))

        if reqData['code'] != '' and reqData['name'] != '':
            try:
                classificationExists = Classification.objects.get(code=reqData['code'], name=reqData['code'])
            except Classification.DoesNotExist:
                classification = Classification(code=reqData['code'], name=reqData['code'])
                classification.save()

                message = 'Classification #' + str(
                    classification.id) + ': ' + classification.name + ' created by ' + request.user.username

                print(message)
                logging.info(message)

            if 'fileData' in reqData:
                for element in reqData['fileData']:
                    elementArray = element.split(',')
                    if len(elementArray) > 1:
                        elementArray[1] = elementArray[1].replace("\r", "")

                        try:
                            classificationExists = Classification.objects.get(code=elementArray[0],
                                                                              name=elementArray[1])
                        except Classification.DoesNotExist:
                            classification = Classification(code=elementArray[0], name=elementArray[1])
                            classification.save()

                            message = 'Classification #' + str(
                                classification.id) + ': ' + classification.name + ' created by ' + request.user.username

                            print(message)
                            logging.info(message)

            return JsonResponse({"message": "Success. Classification(s) created"}, status=200)
        else:
            return JsonResponse({"message": "Error. Please provide classification details."}, status=200)

    else:
        return JsonResponse({"message": "Invalid request"}, status=200)


def get_classification_details(request, id):
    if request is None or not request.user.is_authenticated:
        return JsonResponse({"message": "Error. Access forbidden."}, status=403)

    if not request.user.has_perm('BI.advertising_access'):
        return JsonResponse({"message": "Error. Access forbidden"}, status=403)

    try:
        classification = Classification.objects.get(pk=id)
    except Classification.DoesNotExist:
        return JsonResponse({"message": "Error. Cannot find classification with that id. Please try again."},
                            status=200)

    return JsonResponse({"message": "Success", "classification": model_to_dict(classification)}, status=200)


def edit_classification(request, id):
    if request is None or not request.user.is_authenticated:
        return JsonResponse({"message": "Error. Access forbidden."}, status=403)

    if not request.user.has_perm('BI.advertising_access'):
        return JsonResponse({"message": "Error. Access forbidden"}, status=403)

    try:
        classification = Classification.objects.get(pk=id)
    except Classification.DoesNotExist:
        return JsonResponse({"message": "Error. Cannot find classification with that id. Please try again."},
                            status=200)

    if request.method == 'POST':
        reqData = json.loads(request.body.decode('utf-8'))

        classification.name = reqData['name']
        classification.code = reqData['code']
        classification.active = reqData['active']

        classification.save()

        message = 'Classification #' + classification.id + ': ' + classification.name + ' edited by ' + request.user.username

        print(message)
        logging.info(message)

        return JsonResponse({"message": "Success"}, status=200)

    else:
        return JsonResponse({"message": "Error. Invalid request. Please try again."}, status=200)


def list_classified_adjustments(request):
    if request is None or not request.user.is_authenticated:
        return JsonResponse({"message": "Error. Access forbidden."}, status=403)

    if not request.user.has_perm('BI.advertising_access'):
        return JsonResponse({"message": "Error. Access forbidden."}, status=403)

    if request.method == 'GET':

        publications = Publication.objects.all()
        classifiedAdjustments = ClassifiedAdjustment.objects.all()

        activeClassifiedAdjustments = []
        inactiveClassifiedAdjustments = []

        for adjustment in classifiedAdjustments:
            if adjustment.active:
                activeClassifiedAdjustments.append(adjustment)
            else:
                inactiveClassifiedAdjustments.append(adjustment)

        context = {
            "access": "allow",
            "message": "",
            "groups": ', '.join(views.get_groups(request)),
            "menu": views.get_sidebar(request),
            "publications": publications,
            "activeClassifiedAdjustments": activeClassifiedAdjustments,
            "inactiveClassifiedAdjustments": inactiveClassifiedAdjustments,
        }

        return render(request, "classifieds/adjustments/ListClassifiedAdjustments.html", context)

    elif request.method == 'POST':
        reqData = json.loads(request.body.decode('utf-8'))

        amount = float(reqData['amount'])

        if reqData['valueType'] not in ['amount', 'percentage']:
            return JsonResponse({"error": "Error. Invalid value type. Can only be either an amount or percentage"},
                                status=200)

        try:
            publication = Publication.objects.get(pk=reqData['publication'])
        except Publication.DoesNotExist:
            return JsonResponse({"message": "Error. Cannot find publication"}, status=200)

        adjustment = ClassifiedAdjustment(code=reqData['code'], description=reqData['description'], amount=amount,
                                          value_type=reqData['valueType'],
                                          apply_level=reqData['applyLevel'], type=reqData['creditDebit'],
                                          publication=publication)
        adjustment.save()

        return JsonResponse({"message": "Success! Adjustment created"}, status=200)

    else:
        return JsonResponse({"error": "Error. Request method not allowed"}, status=405)


def classified_adjustment_details(request, adjustmentId):
    if request is None or not request.user.is_authenticated:
        return JsonResponse({"message": "Error. Access forbidden."}, status=403)

    if not request.user.has_perm('BI.advertising_access'):
        return JsonResponse({"message": "Error. Access forbidden."}, status=403)

    if request.method == 'GET':
        if is_ajax(request):
            adjustmentId = request.GET.get('adjustmentId')
            try:
                adjustment = ClassifiedAdjustment.objects.get(pk=adjustmentId)
            except ClassifiedAdjustment.DoesNotExist:
                print('No classified adjustment found with id: ' + adjustmentId)
                return JsonResponse({"message": 'No classified adjustment found with id: ' + str(adjustmentId)},
                                    status=200)

            return JsonResponse({"message": "Success", "adjustment": model_to_dict(adjustment)})

        try:
            adjustment = ClassifiedAdjustment.objects.get(pk=adjustmentId)
        except ClassifiedAd.DoesNotExist:
            return JsonResponse({"message": "Error. Cannot find classified adjustment"}, status=200)

        return JsonResponse({"message": "Success", "adjustment_details": model_to_dict(adjustment)}, status=200)

    elif request.method == 'POST':
        reqData = json.loads(request.body.decode('utf-8'))

        try:
            adjustment = ClassifiedAdjustment.objects.get(pk=adjustmentId)
        except ClassifiedAd.DoesNotExist:
            return JsonResponse({"message": "Error. Cannot find classified adjustment"}, status=200)

        try:
            publication = Publication.objects.get(pk=reqData['editPublication'])
        except Publication.DoesNotExist:
            return JsonResponse({"message": "Error. Cannot find publication"}, status=200)

        adjustment.code = reqData['editCode']
        adjustment.description = reqData['editDescription']
        adjustment.amount = float(reqData['editAmount'])
        adjustment.value_type = reqData['editValueType']
        adjustment.apply_level = reqData['editApplyLevel']
        adjustment.value_type = reqData['editCreditDebit']
        adjustment.publication = publication

        adjustment.active = reqData['editActive']
        adjustment.updated_by = request.user.username

        adjustment.save()

        return JsonResponse({"message": "Success. Classified adjustment saved!"}, status=200)

    else:
        return JsonResponse({"message": "Error. Invalid request method. Please try again"}, status=200)


def get_adjustments_by_publication(request):
    if request is None or not request.user.is_authenticated:
        return JsonResponse({"message": "Error. Access forbidden."}, status=403)

    if not request.user.has_perm('BI.advertising_access'):
        return JsonResponse({"message": "Error. Access forbidden."}, status=403)

    if request.method == 'GET':
        publications = request.GET.get('publication[]')

        adjustments = ClassifiedAdjustment.objects.all()

        adjustmentList = []
        for adjustment in adjustments:
            if adjustment.publication:
                publication = adjustment.publication

                if str(publication.id) in publications:
                    obj = {
                        "id": adjustment.id,
                        "code": adjustment.code,
                        "description": adjustment.description,
                        "value_type": adjustment.value_type,
                        "amount": adjustment.amount,
                        "credit/debit": adjustment.value_type,
                        "apply_level": adjustment.apply_level,
                        "publication": {
                            "id": adjustment.publication.id,
                            "name": adjustment.publication.name
                        }
                    }
                    adjustmentList.append(obj)

        return JsonResponse({"message": "Success", "adjustments": adjustmentList}, status=200)

    else:
        return JsonResponse({"message": "Error. Invalid request method. "}, statue=405)


def list_classified_rates(request):
    if request is None or not request.user.is_authenticated:
        return redirect(login_redirect + "advertising")

    if not request.user.has_perm('BI.advertising_access'):
        return render(request, "advertising.html",
                      {"access": "deny", "message": "Access denied!", "menu": views.get_sidebar(request)})

    rates = ClassifiedRate.objects.all()

    context = {
        "access": "allow",
        "message": "",
        "groups": ', '.join(views.get_groups(request)),
        "menu": views.get_sidebar(request),
        "rates": rates
    }

    return render(request, "classifieds/rates/ListClassifiedRates.html", context)


def create_classified_rate(request):
    if request is None or not request.user.is_authenticated:
        return redirect(login_redirect + "advertising")

    if not request.user.has_perm('BI.advertising_access'):
        return render(request, "advertising.html",
                      {"access": "deny", "message": "Access denied!", "menu": views.get_sidebar(request)})

    if request.method == 'GET':

        publications = getPublicationAccess(request.user.username)

        context = {
            "access": "allow",
            "message": "",
            "groups": ', '.join(views.get_groups(request)),
            "menu": views.get_sidebar(request),
            "publications": publications,
            "accounts": [row.account for row in AccountAccess.objects.filter(user=request.user.id)]
        }

        return render(request, "classifieds/rates/CreateClassifiedRate.html", context)

    elif request.method == 'POST':

        reqData = request.POST.dict()

        new_rate = ClassifiedRate(name=request.POST.get('name'), description=request.POST.get('description'),
                                  unit_price=request.POST.get('unit_price'),
                                  tax_category=request.POST.get('tax_category'),
                                  pricing=request.POST.get('pricing'), start_date=request.POST.get('start_date'),
                                  end_date=request.POST.get('end_date'))

        if 'locked' in reqData and reqData['account'] != '':
            try:
                account = Account.objects.get(pk=reqData['account'])

                new_rate.locked = True
                new_rate.account = account

            except Account.DoesNotExist:
                new_rate.locked = False
                new_rate.account = None

        new_rate.save()

        message = new_rate.id + ' has been created by ' + request.user.username

        logging.info(message)
        print(message)

        publicationList = request.POST.getlist('publication')

        for pubId in publicationList:
            try:
                publication = Publication.objects.get(pk=pubId)
            except Publication.DoesNotExist:
                continue

            classifiedRatePub = ClassifiedRatePublication(rate=new_rate, publication=publication)
            classifiedRatePub.save()

        return HttpResponseRedirect('/advertising/classifieds/rates/' + str(new_rate.id) + '/')


def classified_rate_details(request, rateId):
    if request is None or not request.user.is_authenticated:
        return redirect(login_redirect + "advertising")

    if not request.user.has_perm('BI.advertising_access'):
        return render(request, "advertising.html",
                      {"access": "deny", "message": "Access denied!", "menu": views.get_sidebar(request)})

    rate = get_object_or_404(ClassifiedRate, pk=rateId)

    if rate.end_date:
        endDate = datetime.strptime(rate.end_date[:10], '%Y-%m-%d').date()
        if endDate < date.today():
            rate.active = False
            rate.save()

    ratePublications = ClassifiedRatePublication.objects.filter(rate=rate)

    if request.method == 'GET':

        context = {
            "access": "allow",
            "message": "",
            "groups": ', '.join(views.get_groups(request)),
            "menu": views.get_sidebar(request),
            "rate": rate,
            "ratePublications": ratePublications
        }

        return render(request, "classifieds/rates/ViewClassifiedRate.html", context)

    else:
        return JsonResponse({"message": "Error. Method not implemented "}, status=501)


def edit_classified_rate(request, rateId):
    if request is None or not request.user.is_authenticated:
        return redirect(login_redirect + "advertising")

    if not request.user.has_perm('BI.advertising_access'):
        return render(request, "advertising.html",
                      {"access": "deny", "message": "Access denied!", "menu": views.get_sidebar(request)})

    rate = get_object_or_404(ClassifiedRate, pk=rateId)

    if request.method == 'GET':
        context = {
            "access": "allow",
            "message": "",
            "groups": ', '.join(views.get_groups(request)),
            "menu": views.get_sidebar(request),
            "rate": rate,
        }

        return render(request, "classifieds/rates/EditClassifiedRate.html", context)


def get_rates_by_publication(request):
    if request is None or not request.user.is_authenticated:
        return JsonResponse({"message": "Error. Access forbidden."}, status=403)

    if not request.user.has_perm('BI.advertising_access'):
        return JsonResponse({"message": "Error. Access forbidden."}, status=403)

    if request.method == 'GET':
        reqPublications = request.GET.get('publications[]')
        publicationList = [num for num in reqPublications if num not in [',']]

        rateList = getClassifiedRates(publicationList)

        return JsonResponse({"message": "Success", "rates": rateList}, status=200)

    else:
        return JsonResponse({"message": "Error. Method not implemented"}, status=501)


def list_classified_ad_types(request):
    if request is None or not request.user.is_authenticated:
        return redirect(login_redirect + "advertising")

    if not request.user.has_perm('BI.advertising_access'):
        return render(request, "advertising.html",
                      {"access": "deny", "message": "Access denied!", "menu": views.get_sidebar(request)})

    if request.method == 'GET':

        adTypes = ClassifiedAdType.objects.all()

        context = {
            "access": "allow",
            "message": "",
            "groups": ', '.join(views.get_groups(request)),
            "menu": views.get_sidebar(request),
            "adTypes": adTypes,
        }

        return render(request, "classifieds/ad_types/ListClassifiedAdTypes.html", context)

    elif request.method == 'POST':
        reqData = json.loads(request.body.decode('utf-8'))

        if reqData['type'] == 'create':
            adType = ClassifiedAdType(name=reqData['name'], code=reqData['code'])
            adType.save()

            return JsonResponse({"message": "Success. New ad type created!"}, status=200)
        elif reqData['type'] == 'edit':
            try:
                adType = ClassifiedAdType.objects.get(pk=reqData['id'])
            except ClassifiedAdType.DoesNotExist:
                return JsonResponse({"message": "Error. An error occurred. Please try again."}, status=200)

            adType.name = reqData['name']
            adType.code = reqData['code']

            adType.save()

            return JsonResponse({"message": "Success. Ad type saved"}, status=200)

    else:
        return JsonResponse({"message": "Error. Method not allowed."}, status=405)


def classified_ad_type_details(request):
    if request is None or not request.user.is_authenticated:
        return JsonResponse({"message": "Error. Access forbidden."}, status=403)

    if not request.user.has_perm('BI.advertising_access'):
        return JsonResponse({"message": "Error. Access forbidden."}, status=403)

    if request.method == 'GET':
        reqTypeId = request.GET.get('typeId')

        if reqTypeId is not None or reqTypeId != 'undefined':

            try:
                adType = ClassifiedAdType.objects.get(pk=reqTypeId)
            except ClassifiedAdType.DoesNotExist:
                return JsonResponse({"message": "Error. Cannot find classification ad type with that id."}, status=200)

            return JsonResponse({"message": "Success", "adType": model_to_dict(adType)}, status=200)
        else:
            return JsonResponse({"message": "Error. Unknown ad type id. Please try again."}, status=200)

    else:
        return JsonResponse({"message": "Error. Method not implemented"}, status=501)


def register_campaign(request):
    if request is None or not request.user.is_authenticated:
        return JsonResponse({"message": "Error. Access forbidden."}, status=403)

    if not request.user.has_perm('BI.advertising_access'):
        return JsonResponse({"message": "Error. Access forbidden."}, status=403)

    if request.method == 'POST':
        body = request.body.decode('utf-8')
        data = json.loads(body)

        modal = ClassifiedCampaignSummary()

        modal.campaign_name = data['campaignName']
        modal.start_date = datetime.strptime(data['startDate'], "%Y-%m-%d")
        modal.end_date = datetime.strptime(data['endDate'], "%Y-%m-%d")
        modal.brief = data['brief']
        modal.advertiser_name = data['advertiserName']
        modal.advertiser_id = data['advertiserId']
        modal.sales_contact = data['salesName']
        modal.contact_id = data['salesId']
        modal.total_sub = data['printTotal']
        modal.total_adjustment = data['adjTotal']
        modal.total_campaign = data['campaignTotal']
        modal.campaign_detail = data['campaignDetail']

        modal.save()

        latest_data = (ClassifiedCampaignSummary.objects.last()).id

        return JsonResponse({'id': latest_data})
    else:
        return JsonResponse({'error': 'Invalid request'})


def campaign_detail(request):
    if request is None or not request.user.is_authenticated:
        return redirect(login_redirect + "advertising")

    if not request.user.has_perm('BI.advertising_access'):
        return render(request, "advertising.html",
                      {"access": "deny", "message": "Access denied!", "menu": views.get_sidebar(request)})

    if request.method == 'GET':
        data = request.GET.get('campaignId')

    campaign = ClassifiedCampaignSummary.objects.get(id=data)
    # campaignList = serializers.serialize('json', campaign)

    salesPersonQuery = SalesPerson.objects.all()
    salesPersonList = serializers.serialize('json', salesPersonQuery)

    adTypes = ClassifiedAdType.objects.all()

    adSizes = ClassifiedAdSize.objects.all()

    adjustments = ClassifiedAdjustment.objects.all()

    rating = ClassifiedRate.objects.all()
    ratingList = serializers.serialize('json', rating)

    context = {
        "campaign": campaign,
        "salesPersonQuery": salesPersonQuery,
        "salesPersonList": salesPersonList,
        "adTypes": adTypes,
        "adSizes": adSizes,
        "adjustments": adjustments,
        "rating": rating,
        "ratingList": ratingList
    }

    return render(request, "CampaignDetail.html", context)
