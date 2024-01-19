from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from limitOrderBookApp.api.serializer import OrderSerializer
from limitOrderBookApp.models import Stock


# Create your views here.
class StockView(ModelViewSet):
    queryset = Stock.objects.get()
    serializer_class = OrderSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
