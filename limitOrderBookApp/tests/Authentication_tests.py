import pytest
from django.test import TestCase
from django.test import Client
from rest_framework import status

pytestmark = pytest.mark.django_db


@pytest.mark.django_db
class TestAuthentication(TestCase):
    pytestmark = pytest.mark.django_db

    def setUp(self):
        self.url_login = '/login/'
        self.url_register = '/register/'
        self.url_logout = '/logout/'

    def test_the_status_code_for_login(self):
        c = Client()
        response = c.post(self.url_login, {'username': 'test_user', 'password': 'test_user'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_the_status_code_for_register(self):
        c = Client()
        response = c.post(self.url_register, {'username': 'test_user', 'password': 'test_user', 'confirm_password': 'test_user'})
        self.assertEqual(response.status_code, status.HTTP_302_FOUND)
        self.assertRedirects(response, '/login/')

    def test_the_status_code_for_logout(self):
        c = Client()
        response = c.post(self.url_logout)
        self.assertEqual(response.status_code, status.HTTP_302_FOUND)