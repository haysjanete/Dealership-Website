from common.json import ModelEncoder
from .models import AutomobileVO, SalesPerson, SalesRecord, Customer

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin"]

class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["name", "employee_number", "id"]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = ["name", "address", "phone_number", "id"]

class SalesRecordEncoder(ModelEncoder):
    model = SalesRecord
    properties = ["price", "customer", "sales_person"]

    encoders = {
        "vin": AutomobileVOEncoder(), "sales_person": SalesPersonEncoder(), "customer": CustomerEncoder(),
    }

    def get_extra_data(self, o):
        return {"customer": o.customer.name}

    def get_extra_data(self, o):
        return {"vin": o.automobile.vin}
