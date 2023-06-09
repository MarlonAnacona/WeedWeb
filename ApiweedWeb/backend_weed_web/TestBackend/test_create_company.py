from rest_framework.test import APITestCase
from rest_framework import status
from faker import Faker
from users.models import Person, Company





class TestSetUp(APITestCase):
    def setUp(self):
        self.login_url = 'http://127.0.0.1:8000/users/api/token/'


        self.user = Company.objects.create_user(
            email = 'test@gmail.com',
            password='12345678',
            phone_number='123456789',
            NIT='12345678',
            name='Test de companias'
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