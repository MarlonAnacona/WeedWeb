from django.test import TestCase
from django.core.management import call_command
from django.db import IntegrityError
from django.utils import timezone
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


    def test_customer_creation(self):
        """Test that the Customer model is created correctly"""

        my_customer = Customer.objects.get(email=self.data['email'])
        self.assertEqual(my_customer.email, self.data['email'])
        self.assertEqual(my_customer.phone_number, self.data['phone_number'])
        self.assertEqual(my_customer.is_superuser, False)
        self.assertEqual(my_customer.is_staff, False)
        self.assertEqual(my_customer.is_active, True)        
        self.assertAlmostEqual(my_customer.date_joined, timezone.now(), delta=timezone.timedelta(minutes=10))


    def test_customer_creation_with_duplicate_email(self):
        """ test that a new Customer model cant not be created if a customer alredy has the same email """
        cus_data = self.data
        cus_data['phone_number'] = '7894561230'
    
        with self.assertRaises(IntegrityError):
            Customer.objects.create(**cus_data)


    def test_customer_creation_with_duplicate_phone_number(self):
        """ test that a new Customer model cant not be created if a customer alredy has the same phone_number """
        cus_data = self.data
        cus_data['email'] = 'my_mail@emial.com'
    
        with self.assertRaises(IntegrityError):
            Customer.objects.create(**cus_data)


    def test_customer_creation_with_wrong_email(self):
        cus_data = {
                'email': "customer_email.com",
                'password': 'contrasena123',
                'phone_number': '1234567899'
                }

        Customer.objects.create(**cus_data)


        Customer.objects.create(**cus_data)
    


    def test_update_customer(self):
        """ Test customer models updare for the attributes email and phone_number """
        my_customer = Customer.objects.get(email=self.data['email'])

        my_customer.email = 'juan@email.com'
        my_customer.phone_number = '9876543210'
        my_customer.save()

        self.assertEqual(my_customer.email, 'juan@email.com')
        self.assertEqual(my_customer.phone_number, '9876543210')
