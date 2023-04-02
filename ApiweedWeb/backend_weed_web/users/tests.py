from django.test import TestCase

# Create your tests here.
class User(models.Model):
    id_user = models.IntegerField(primary_key= True)