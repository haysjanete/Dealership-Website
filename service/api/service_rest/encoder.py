from common.json import ModelEncoder
from .models import AutomobileVO, Technician, ServiceAppointment


class AutomobileVOEncoder(ModelEncoder):
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


class ServiceAppointmentEncoder(ModelEncoder):
    model = ServiceAppointment
    properties = [
        "id",
        "automobile",
        "customer_name",
        "appointment_date",
        "appointment_date",
        "technician",
        "service_reason",
        "vip_status",
    ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "technician": TechnicianEncoder(),
    }
