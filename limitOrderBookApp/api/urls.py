from django.urls import path
from limitOrderBookApp import views
from rest_framework import routers

from limitOrderBookApp.views import StockView

router = routers.SimpleRouter()
router.register(r'stocks', views.StockView)
router.register(r'orders', views.OrderView)
router.register(r'transactions', views.TransactionView)


urlpatterns = [
]

urlpatterns += router.urls
