from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from rest_framework.exceptions import MethodNotAllowed
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from limitOrderBookApp.api.serializer import OrderSerializer, StockSerializer, TransactionSerializer
from limitOrderBookApp.models import Stock, Order, Transaction
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from rest_framework.permissions import IsAuthenticated
from django.core.exceptions import ValidationError

from limitOrderBookApp.utils import match_order


def register_request(request):
    if request.method == "POST":
        if request.POST["password"] == request.POST["confirm_password"]:
            is_user_exists = User.objects.filter(username=request.POST["username"]).exists()
            if is_user_exists:
                raise ValidationError('This username is already used!')
            else:
                User.objects.create_user(username=request.POST["username"],
                                         password=request.POST["password"])
                return redirect('/login/')
    form = UserCreationForm()
    return render(request, 'register.html', {'register_form': form})


def login_request(request):
    if request.method == "POST":
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('/limit-order-book/api/orders/')
    form = AuthenticationForm()
    return render(request, 'login.html', {'login_form': form})


def logout_request(request):
    logout(request)
    return redirect('/login/')


# Create your views here.
class StockView(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Stock.objects.all()
    serializer_class = StockSerializer


class OrderView(ModelViewSet):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        quantity = serializer.validated_data.get('quantity', 0)
        price = serializer.validated_data.get('price', 0)

        if quantity <= 0:
            raise ValidationError("Quantity must be greater than 0.")

        if price <= 0:
            raise ValidationError("Price must be greater than 0.")

        order = serializer.save(user=self.request.user)
        match_order(order)

    def update(self, request, *args, **kwargs):
        raise MethodNotAllowed(request.method)

    def partial_update(self, request, *args, **kwargs):
        raise MethodNotAllowed(request.method)


class TransactionView(ReadOnlyModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = TransactionSerializer

    def get_queryset(self):
        user = self.request.user
        return Transaction.objects.filter(buy_order__user=user) | Transaction.objects.filter(sell_order__user=user)
