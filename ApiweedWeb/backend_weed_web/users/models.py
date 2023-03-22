from django.db import models

<<<<<<< HEAD
#User's model with the atributes: id_user, password, user_email and phone_number
#act: 21/03/2023
id_type=(('C.C','C.C'),('NIT','NIT'))
user_type=(('Natural','Natural'),('Juridica','Juridica'))

class User(models.Model):
    id_user = models.IntegerField(null = False, blank = False,primary_key=True)
    type_id=models.CharField(max_length=12,choices=id_type,default='C.C')
    type_user=models.CharField(max_length=12,choices=user_type,default='Natural')
    first_name=models.CharField(max_length=64,null=True)
    middle_name=models.CharField(max_length=64,null=True)
    last_name=models.CharField(max_length=64,null=True)
    name=models.CharField(max_length=64,null=True)
    pasword=models.CharField(null = False, blank = False, max_length=50)
    user_email=models.EmailField(null = False, blank = False, max_length=254)
    phone_number=models.CharField(null = False, blank = False, max_length=12)
    
=======
# Create your models here.

class User(models.Model):
    pass
>>>>>>> e4d2a5ff5de7e7a53169c1d396f2abf44fa82ae2
