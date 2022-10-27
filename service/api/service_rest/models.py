from django.db import models


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=17)


class Technician(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_number = models.PositiveSmallIntegerField()
    employee_photo = models.URLField(null=True)

    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name}"


class ServiceAppointment(models.Model):
    vin = models.CharField(max_length=17)
    customer_name = models.CharField(max_length=200)
    appointment_date = models.DateField()
    appointment_time = models.TimeField()
    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE,
    )
    service_reason = models.CharField(max_length=200)
    vip_status = models.BooleanField(default=False)
    service_status = models.CharField(max_length=100, default="Submitted")

    def cancel(self):
        self.service_status = "Cancelled"
        self.save()

    def finish(self):
        self.service_status = "Finished"
        self.save()
