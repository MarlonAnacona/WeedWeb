from django.test import TestCase
from django.core.management import call_command
from .models import Customer, Company, Person

# Create your tests here.

class CustomerModelTestCase(TestCase):

    def setUp(self):
    # Set up any necessary data for the tests

        self.data = {
                'email': "test_customer@email.com",
                'password': 'contrasena123',
                'phone_number': '1234567890'
                }

        Customer.objects.create(**self.data)


    def test_model_creation(self):
        """Test that the model is created correctly"""

        model = Customer.objects.get(email=self.data['email'])
        self.assertEqual(model.email, self.data['email'])
        self.assertEqual(model.phone_number, self.data['phone_number'])