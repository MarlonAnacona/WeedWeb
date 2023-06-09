from rest_framework.test import APITestCase
from rest_framework import status
from faker import Faker
from users.models import Person, Company


class TestSetUp(APITestCase):
    def setUp(self):
        self.login_url = 'http://127.0.0.1:8000/users/api/token/'

        faker = Faker()

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
            self.login_url,
            {
                'email': 'test@gmail.com',
                'password': '12345678'
            },
            format='json'
        )

        #import pdb; pdb.set_trace()
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.responseStatus = response.status_code
        self.token = response.data['access']
        #self.client.credentials(HTTP_AUTHORIZATION = 'Token ' + self.token)
        #import pdb; pdb.set_trace()

        return super().setUp()


    def test_pass(self):
        print(self.responseStatus)

""" class TestSetUp(APITestCase):
    

    def setUp(self):
        self.login_url = 'http://127.0.0.1:8000/users/api/token/'

        faker = Faker()

        self.user = Person.objects.create_superuser(
            username = 'TestCase',
            email = 'TestCase@gmail.com',
            first_name = 'TestCase',
            last_name = 'TestCase',
            password = 'TestPassword'
        )

        response = self.client.post(
            self.login_url,
            {
                'username': self.user.username,
                'password': 'TestPassword'
            },
            format='json'
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.token = response.data['token']
        self.client.credentials(HTTP_AUTHORIZATION = 'Token ' + self.token)
        #import pdb; pdb.set_trace()

        return super().setUp()

    def test_pass(self):
        print(self.token) """