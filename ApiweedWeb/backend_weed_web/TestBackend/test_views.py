from rest_framework.test import APITestCase
from rest_framework import status
from django.db import IntegrityError
from users.models import Person, Company
from django.urls import reverse

import json



class TestCompanyCreate(APITestCase):
    def setUp(self):
        
        self.user = Company.objects.create_user(
            email = 'test@gmail.com',
            password='12345678',
            phone_number='123456789',
            NIT='12345678',
            name='Test de companias'
        )

        response = self.client.post(
            reverse("users:token_obtain_pair"),
            {
                'email': 'test@gmail.com',
                'password': '12345678'
            },
            format='json'
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.responseStatus = response.status_code
        self.token = response.data['access']

        return super().setUp()


    def test_pass(self):
        return print(self.responseStatus)



class TestPersonCreate(APITestCase):
    def setUp(self):
        
        self.user = Person.objects.create_user(
            email = 'test@gmail.com',
            password='12345678',
            phone_number='123456789',
            national_id='12345678',
            first_name='testCase',
            middle_name='testCase',
            last_name='testCase'
        )

        response = self.client.post(
            reverse("users:token_obtain_pair"),
            {
                'email': 'test@gmail.com',
                'password': '12345678'
            },
            format='json'
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.responseStatus = response.status_code
        self.token = response.data['access']

        return super().setUp()


    def test_pass(self):
        return print(self.responseStatus)



class TestCaseCompanyRetrieveInfo(APITestCase):
    def setUp(self):

        self.user = Company.objects.create_user(
            email = 'test@gmail.com',
            password='12345678',
            phone_number='123456789',
            NIT='12345678',
            name='Test de companias'
        )

        response = self.client.post(
            reverse("users:token_obtain_pair"),
            {
                'email': 'test@gmail.com',
                'password': '12345678'
            },
            format='json'
        )

        self.token = response.data['access']
        self.client.credentials(HTTP_AUTHORIZATION='Bearer ' + self.token)

        company_info = self.client.get(
            reverse('users:GET_company', kwargs={'pk': self.user.id})
        )

        self.status_code = company_info.status_code

        return super().setUp()


    def test_pass(self):
        return print(self.status_code)