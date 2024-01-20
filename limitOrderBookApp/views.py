from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from limitOrderBookApp.api.serializer import OrderSerializer, StockSerializer, TransactionSerializer
from limitOrderBookApp.models import Stock, Order, Transaction


# Create your views here.
class StockView(ModelViewSet):
    queryset = Stock.objects.all()
    serializer_class = StockSerializer


class OrderView(ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class TransactionView(ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
