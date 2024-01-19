from django.urls import path
from limitOrderBookApp import views
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'stock', views.StockView)


urlpatterns = [
]

urlpatterns += router.urls
