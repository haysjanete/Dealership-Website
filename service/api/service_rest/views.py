from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import AutomobileVO, Technician, ServiceAppointment


class AutomobileVO(ModelEncoder):
    model = AutomobileVO
    properties = [
        "import_href",
        "vin",
    ]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "first_name",
        "last_name",
        "employee_number",
        "employee_photo",
    ]


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
        )
