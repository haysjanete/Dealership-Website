from django.contrib import admin
from .models import SalesPerson, Customer, AutomobileVO, SalesRecord

# Register your models here.

admin.site.register(SalesPerson)
admin.site.register(Customer)
admin.site.register(AutomobileVO)
admin.site.register(SalesRecord)