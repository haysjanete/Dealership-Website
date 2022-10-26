from django.db import models
from django.urls import reverse

# Create your models here.

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=False)
    import_href = models.CharField(max_length=200, unique=True)


class SalesPerson(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.PositiveSmallIntegerField(null=False)
    picture_url = models.URLField(null=True)

    def __str__(self):
        return self.name


class Customer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=400)
    phone_number = models.CharField(max_length=30)

    def __str__(self):
        return self.name

class SalesRecord(models.Model):
    price = models.PositiveIntegerField(null=False)

    customer = models.ForeignKey(
        Customer,
        related_name = "sales_records",
        on_delete=models.CASCADE,
    )

    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="sales_records",
        on_delete=models.CASCADE,
    )

    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sales_records",
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.automobile.vin
