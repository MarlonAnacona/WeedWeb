from django.db import models
from seeds.models import Seeds

# Create your models here.

class SeedFlavor(models.Model):
    seed_id = models.ForeignKey(Seeds, on_delete=models.CASCADE, null=False)
    flavor_id = models.CharField(max_length=50)

class Flavor(models.Model):
    id = models.ForeignKey(SeedFlavor, on_delete=models.CASCADE, null =False)
    flavor_name= models.CharField(max_length=50)

    def __str__(self):
        return self.flavor_name

class SeedSmell(models.Model):
    seed_id =models.ForeignKey(Seeds, on_delete=models.CASCADE, null=False)
    smell_id= models.CharField(max_length=50)

class Smell(models.Model):
    id = models.ForeignKey(SeedSmell, on_delete= models.CASCADE, null =False)
    smell_name= models.CharField(max_length=50)

    def __str__(self):
        return self.smell_name

class SeedEffect(models.Model):
    seed_id= models.ForeignKey(Seeds, on_delete=models.CASCADE, null=False)
    effect_id= models.CharField(max_length=50)


class Effect(models.Model):
    id = models.ForeignKey(SeedEffect, on_delete= models.CASCADE, null=False)
    effect_name= models.CharField(max_length=50)

    def __str__(self):
        return self.effect_name
