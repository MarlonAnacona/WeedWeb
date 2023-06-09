from django.test import TestCase
from users.serializers import PersonSerializer, CompanySerializer
from users.models import Person, Company
import pdb

import json

class SerializerTestCasePerson(TestCase):
    def setUp(self):
        # Configura cualquier dato necesario para tus pruebas

        self.data = {
            'id': '1',
            'email': 'test@gmail.com',
            'password': '12345678',
            'phone_number': '3136521525',
            'national_id': '1006016779',
            'first_name': 'test',
            'middle_name': 'test',
            'last_name':'test', 
        }

    def test_serializer_valid(self):
        serializer = PersonSerializer(data=self.data)
        self.assertTrue(serializer.is_valid())


    def test_serializer_output(self):
        instance = Person.objects.create(**self.data)
        serializer = PersonSerializer(instance)

        expected_data = {
            'id': 1,
            'email': 'test@gmail.com',
            'phone_number': '3136521525',
            'national_id': '1006016779',
            'first_name': 'test',
            'middle_name': 'test',
            'last_name':'test', 
            # ...
        }

        expected_data_json = json.dumps(expected_data)
        serializer_data_json = json.dumps(serializer.data)
        self.assertEqual(serializer_data_json, expected_data_json)