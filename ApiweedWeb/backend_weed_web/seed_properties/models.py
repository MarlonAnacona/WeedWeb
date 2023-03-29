from django.db import models
from seeds.models import Seeds

# Create your models here.

class SeedProperties(models.Model): 
    seed_id = models.ForeignKey(Seeds, on_delete=models.CASCADE, null=False)
    flavor_name = models.CharField(max_length=50)
    effect_name = models.CharField(max_length=50)
    smell_name = models.CharField(max_length=50)

    #get all properties
    def __str__(self):
        return f'{self.flavor_name}, {self.effect_name}, {self.smell_name}'
    

    def get_flavor(self):
        return self.flavor_name
    

    def get_effect(self):
        return self.effect_name
    
    def get_smell(self):
        return self.smell_name
    

