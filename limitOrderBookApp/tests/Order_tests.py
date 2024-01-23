import pytest
import json
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from limitOrderBookApp.api.serializer import OrderSerializer
from limitOrderBookApp.models import Order, Stock
from limitOrderBookApp.utils import match_order

pytestmark = pytest.mark.django_db


@pytest.mark.django_db
class OrderViewTests(APITestCase):
    pytestmark = pytest.mark.django_db

    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpassword')

        self.stock = Stock.objects.create(stock_name='Apple', stock_short_name='AAPL', price=150)

        self.client.force_authenticate(user=self.user)

    def test_create_order(self):
        url = '/limit-order-book/api/orders/'
        print(url)
        data = {
            'user': self.user.id,
            'stock': self.stock.stock_short_name,
            'order_type': 'buy',
            'price': 100.00,
            'quantity': 10,
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Order.objects.count(), 1)

        created_order = Order.objects.get()

        self.assertEqual(created_order.user, self.user)
        self.assertEqual(created_order.stock, self.stock)
        self.assertEqual(created_order.order_type, 'buy')
        self.assertEqual(created_order.price, 100.00)
        self.assertEqual(created_order.quantity, 10)
        self.assertEqual(created_order.current_quantity, 10)

    def test_create_order_invalid_quantity(self):
        url = reverse('order-list')
        data = {
            'user': self.user.id,
            'stock': self.stock.stock_short_name,
            'order_type': 'buy',
            'price': 100.00,
            'quantity': 0,
        }
        with self.assertRaises(ValidationError) as context:
            self.client.post(url, data, format='json')
        self.assertIn('Quantity must be greater than 0.', str(context.exception))
        self.assertEqual(Order.objects.count(), 0)

    def test_create_order_invalid_price(self):
        url = reverse('order-list')
        data = {
            'user': self.user.id,
            'stock': self.stock.stock_short_name,
            'order_type': 'buy',
            'price': 0,
            'quantity': 10,
        }
        with self.assertRaises(ValidationError) as context:
            self.client.post(url, data, format='json')
        self.assertIn('Price must be greater than 0.', str(context.exception))
        self.assertEqual(Order.objects.count(), 0)

    def test_get_orders(self):
        order = Order.objects.create(user=self.user, stock=self.stock, order_type='buy', price=100.00, quantity=10)

        url = reverse('order-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['id'], order.id)

    def test_update_order_method_not_allowed(self):
        order = Order.objects.create(user=self.user, stock=self.stock, order_type='buy', price=100.00, quantity=10)

        url = reverse('order-detail', args=[order.id])
        data = {'price': 120.00}

        response = self.client.put(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

    def test_partial_update_order_method_not_allowed(self):
        order = Order.objects.create(user=self.user, stock=self.stock, order_type='buy', price=100.00, quantity=10)

        url = reverse('order-detail', args=[order.id])
        data = {'price': 120.00}

        response = self.client.patch(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)