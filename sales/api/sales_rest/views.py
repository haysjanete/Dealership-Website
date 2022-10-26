from django.shortcuts import render
from django.views.decorators.http import require_http_methods
import json
from django.http import JsonResponse

from .models import AutomobileVO, SalesPerson, SalesRecord, Customer
from .encoders import SalesPersonEncoder, SalesRecordEncoder, CustomerEncoder, AutomobileVOEncoder

# Create your views here.

@require_http_methods(["GET", "POST"])
def api_sales_person(request):
    if request.method == "GET":
        sales_person = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_person": sales_person},
            encoder=SalesPersonEncoder
        )
    else:
        content = json.loads(request.body)
        sales_person = SalesPerson.objects.create(**content)
        return JsonResponse(
            sales_person,
            encoder=SalesPersonEncoder,
            safe=False,
        )

@require_http_methods(["GET", "POST"])
def api_customer(request):
    if request.method == "GET":
        customer = Customer.object.all()
        return JsonResponse(
            {"customer": customer},
            encoder=CustomerEncoder,
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder = CustomerEncoder,
            safe=False,
        )

@require_http_methods(["GET", "POST", "PUT"])
def api_list_sales(request, sales_person_id=None):
    if request.method == "GET":
        if sales_person_id is not None:
            sales = SalesRecord.objects.filter(sales_person=sales_person_id)
        else:
            sales = SalesRecord.objects.all()
        return JsonResponse (
            {"sales": sales},
            encoder=SalesRecordEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            customer_id = content["customer"]
            customer = Customer.objects.get(id=customer_id)
            content["customer"] = customer

            sales_person_id = content["sales_person"]
            sales_person = SalesPerson.objects.get(id=sales_person_id)
            content["sales_person"] = sales_person

            vin = content["automobile"]
            automobile = AutomobileVO.objects.get(vin=vin)
            content["automobile"] = automobile

            sale = SalesRecord.objects.create(**content)
            return JsonResponse(
                sale,
                encoder=SalesRecordEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Sales records do not exist"}
            )
            response.status_code = 400
            return response

@require_http_methods(["GET"])
def api_show_sale(request, pk):
    if request.method == "GET":
        sale = SalesRecord.objects.filter(sales_person=pk)
        return JsonResponse (
            sale, encoder=SalesRecordEncoder,
            safe=False,
        )

@require_http_methods(["GET"])
def api_unsold_vins(request):
    if request.method == "GET":
        sold_vins = [sale.automobile.vin for sale in SalesRecord.objects.all()]
        unsold_vins = AutomobileVO.objects.exclude(vin_in=sold_vins)
        print(unsold_vins)
        return JsonResponse (
            {"automobiles": unsold_vins},
            encoder=AutomobileVOEncoder,
            safe = False,
        )