from django.urls import path
from .views import api_customer, api_list_sales, api_sales_person, api_show_sale, api_unsold_vins

urlpatterns = [
    path("sales/", api_list_sales, name="api_list_sales"),
    path("sales-person/", api_sales_person, name="api_sales_person"),
    path("customer/", api_customer, name="api_customer"),
    path("sales/<int:pk>/", api_show_sale, name="api_show_sale"),
    path("automobiles/unsold-vins/", api_unsold_vins, name="api_unsold_vins"),
]
