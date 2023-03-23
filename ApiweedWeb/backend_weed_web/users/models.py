from django.core import validators
from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager, PermissionsMixin

# Create your models here.

class CustomerManager(BaseUserManager):
    def create_user(self, email, password, first_name, last_name, phone_number, **extra_fields):
        # Create and save a new user with the given email and password
        user = self.model(email=email, first_name=first_name, last_name=last_name, phone_number=phone_number, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        # Create and save a new superuser with the given email and password
        extra_fields['is_staff'] = True
        extra_fields['is_superuser'] = True

        first_name = extra_fields.get('first_name', 'superuser')
        last_name = extra_fields.get('last_name', 'superuser')
        phone = extra_fields.get('phone_number', '0123456789')

        user = self.create_user(email=email,
                                password=password,
                                first_name=first_name, 
                                last_name=last_name,
                                phone_number=phone,
                                **extra_fields
                                )
        # user.is_staff = True
        # user.is_superuser = True
        user.save()
        return user


class Customer(AbstractUser, PermissionsMixin):
    
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=200, validators=[validators.MinLengthValidator(8)])
    first_name = models.CharField(max_length=30, blank=False, null=False)
    middle_name = models.CharField(max_length=30, blank=True, null=True)
    last_name = models.CharField(max_length=30, blank=False, null=False)
    phone_number = models.CharField(max_length=10, validators=[validators.MinLengthValidator(10)], blank=False, null=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    
    
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ['first_name', 'last_name', 'phone_number']

    objects = CustomerManager()

    def __str__(self):
        return f'customer: {self.first_name} \n  email: {self.email}'


