from django.contrib import admin
from limitOrderBookApp.models import Order, Stock, Transactions

# Register your models here.
admin.site.register(Stock)
admin.site.register(Order)
admin.site.register(Transactions)
