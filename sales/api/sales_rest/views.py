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

@require_http_methods(["GET", "POST","DELETE"])
def api_customer(request):
    if request.method == "GET":
        customer = Customer.objects.all()
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

@require_http_methods(["GET", "POST", "PUT",])
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
        except Customer.DoesNotExist: 
            response = JsonResponse(
                {"message": "Customer does not exist"}
            )
            response.status_code = 400
            return response
        try:
            sales_person_id = content["sales_person"]
            sales_person = SalesPerson.objects.get(id=sales_person_id)
            content["sales_person"] = sales_person
        except SalesPerson.DoesNotExist:
            response = JsonResponse(
                {"message": "Sales Person does not exist"}
            )
            response.status_code = 400
            return response
        try:
            vin = content["automobile"]
            automobile = AutomobileVO.objects.get(vin=vin)
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            response = JsonResponse(
                {"message": "No such automobile"}
            )
            response.status_code = 400
            return response
        try:
            sale = SalesRecord.objects.create(**content)
            return JsonResponse(
                sale,
                encoder=SalesRecordEncoder,
                safe=False,
            )
        except SalesRecord.DoesNotExist:
            response = JsonResponse(
                {"message": "Sales records do not exist"}
            )
            response.status_code = 400
            return response

@require_http_methods(["GET","DELETE"])
def api_show_sale(request, pk):
    if request.method == "GET":
        try:
            sale = SalesRecord.objects.filter(sales_person=pk)
            return JsonResponse (
                sale, 
                encoder=SalesRecordEncoder,
                safe=False,
            )
        except SalesRecord.DoesNotExist:
            return JsonResponse(
                {"message": "Does not exist"},
                status=400
            )
    elif request.method =="DELETE":
        try:
            sale = SalesRecord.objects.get(id=pk)
            sale.delete()
            return JsonResponse(
                sale,
                encoder=SalesRecordEncoder,
            safe=False,
            )
        except SalesRecord.DoesNotExist:
            return JsonResponse(
                {"message": "sale does not exist"}
            )
