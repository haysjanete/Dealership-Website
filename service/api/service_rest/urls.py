from django.urls import path
from .views import (
    api_list_appointments,
    api_appointment,
    api_technician,
    api_list_technicians
    )

urlpatterns = [
    path("technicians/", api_list_technicians, name="api_list_technicians"),
    path("technicians/<int:employee_number>/", api_technician, name="api_show_technician"),
    path("appointments/", api_list_appointments, name="api_list_appointments"),
    path("appointments/<int:pk>/", api_appointment, name="api_show_appointment"),
]
