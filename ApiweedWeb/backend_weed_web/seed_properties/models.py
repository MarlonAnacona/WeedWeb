from django.db import models
from seeds.models import Seeds

# Create your models here.
class Flavor(models.Model):
  
    flavor_name= models.CharField(max_length=50,null=False,blank=False,unique=True)

    def __str__(self):
        return self.flavor_name

class Smell(models.Model):
   
    smell_name= models.CharField(max_length=50,null=False,blank=False,unique=True)

    def __str__(self):
        return self.smell_name

class Effect(models.Model):
    
    effect_name= models.CharField(max_length=50,null=False,blank=False,unique=True)

    def __str__(self):
        return self.effect_name


class SeedFlavor(models.Model):
    seed_id = models.ForeignKey(Seeds, on_delete=models.CASCADE, null=False,blank=False)
    flavor_id = models.ForeignKey(Flavor, on_delete=models.CASCADE, null=False,blank=False)


class SeedSmell(models.Model):
    seed_id =models.ForeignKey(Seeds, on_delete=models.CASCADE, null=False,blank=False)
    smell_id= models.ForeignKey(Smell, on_delete=models.CASCADE, null=False,blank=False)


class SeedEffect(models.Model):
    seed_id= models.ForeignKey(Seeds, on_delete=models.CASCADE, null=False,blank=False)
    effect_id=models.ForeignKey(Effect, on_delete=models.CASCADE, null=False,blank=False)


