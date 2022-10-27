from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .models import AutomobileVO, Technician, ServiceAppointment
from .encoder import TechnicianEncoder, ServiceAppointmentEncoder


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
        )
    else: #POST
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE", "PUT"])
def api_technician(request, employee_number):
    if request.method == "GET":
        try:
            technician = Technician.objects.get(employee_number=employee_number)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            technician = Technician.objects.get(employee_number=employee_number)
            technician.delete()
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else: #PUT
        try:
            content = json.loads(request.body)
            technician = Technician.objects.get(employee_number=employee_number)
            props = [
                "first_name",
                "last_name",
                "employee_number",
                "employee_photo",
            ]
            for prop in props:
                if prop in content:
                    setattr(technician, prop, content[prop])
            technician.save()
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response


require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        service_appointment = ServiceAppointment.objects.all()
        return JsonResponse(
            {"appointments": service_appointment},
            encoder=ServiceAppointmentEncoder,
            safe=False,
        )
    else: #POST
        content = json.loads(request.body)
        try:
            technician_employee_number = content["technician"]
            technician = Technician.objects.get(employee_number=technician_employee_number)
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid employee number"}
            )
        matching_autos = AutomobileVO.objects.filter(vin=content["vin"])
        if len(matching_autos) > 0:
            content["vip_status"] = True
        service_appointment = ServiceAppointment.objects.create(**content)
        return JsonResponse(
            service_appointment,
            encoder=ServiceAppointmentEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE", "PUT"])
def api_appointment(request, pk):
    if request.method == "GET":
        try:
            service_appointment = ServiceAppointment.objects.get(id=pk)
            return JsonResponse(
                service_appointment,
                encoder=ServiceAppointmentEncoder,
                safe=False,
            )
        except ServiceAppointment.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            service_appointment = ServiceAppointment.objects.get(id=pk)
            service_appointment.delete()
            return JsonResponse(
                service_appointment,
                encoder=ServiceAppointmentEncoder,
                safe=False,
            )
        except ServiceAppointment.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else: #PUT
        try:
            content = json.loads(request.body)
            service_appointment = ServiceAppointment.objects.get(id=pk)
            props = [
                "automobile",
                "customer_name",
                "appointment_date",
                "appointment_date",
                "technician",
                "service_reason",
                "vip_status",
                "service_status",
            ]
            for prop in props:
                if prop in content:
                    setattr(service_appointment, prop, content[prop])
            service_appointment.save()
            return JsonResponse(
                service_appointment,
                encoder=ServiceAppointmentEncoder,
                safe=False,
            )
        except ServiceAppointment.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["GET", "POST"])
def api_list_service_history(request):
    if request.method == "GET":
        return JsonResponse(
                {"message": "Success"}
            )
    else: #POST
        content = json.loads(request.body)
        try:
            filtered_appointments = ServiceAppointment.objects.filter(vin=content["vin"])
            return JsonResponse(
                {"appointments": filtered_appointments},
                encoder=ServiceAppointmentEncoder,
                safe=False,
            )
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "VIN does not exist"}
            )
