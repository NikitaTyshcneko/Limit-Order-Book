import pytest
from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.test import APIClient
from django.urls import reverse

from limitOrderBookApp.api.serializer import OrderSerializer
from limitOrderBookApp.models import Stock, Order

pytestmark = pytest.mark.django_db


@pytest.mark.django_db
class TestOrderModel(TestCase):
    pytestmark = pytest.mark.django_db

    def setUp(self):
        self.client = APIClient()
        self.test_user = User.objects.create_user(
            username='testuser',
            password='testpassword'
        )

        self.stock = Stock.objects.create(
            stock_name='Apple',
            stock_short_name='AAPL',
            price=150.00
        )

        self.client.force_authenticate(user=self.test_user)

    def test_create_order(self):
        order = Order.objects.create(
            user=self.test_user,
            stock=self.stock,
            order_type='sell',
            price=150,
            quantity=150
        )

        self.assertEqual(order.user, self.test_user)
        self.assertEqual(order.stock, self.stock)
        self.assertEqual(order.order_status, 'open')
        self.assertEqual(order.current_quantity, 150)

    def test_create_order_with_wrong_quantity(self):
        order = Order.objects.create(
            user=self.test_user,
            stock=self.stock,
            order_type='sell',
            price=150,
            quantity=0
        )

        # Check that no order was created
        self.assertEqual(Order.objects.count(), 0)

