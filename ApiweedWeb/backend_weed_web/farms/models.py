from django.db import models
from users.models import Customer


#Farm's model with the atributes: user_id, farm_name, longitude and latitude
#act: 20/03/2023
class Farm(models.Model):
    user_id = models.ForeignKey(Customer, null = False, blank = False, on_delete = models.CASCADE)
    farm_name = models.CharField(null = False, blank = False, max_length = 64)
    longitude = models.DecimalField(null = False, blank = False, max_digits=9, decimal_places=6)
    latitude = models.DecimalField(null = False, blank = False, max_digits=9, decimal_places=6)

    #Get the farm's name
    def __str__(self):
            return self.farm_name

    #Get the farm's latitude
    def get_latitude(self):
        return self.latitude

    #Get the farm's longitude
    def get_longitude(self):
        return self.longitude

    #Create farm function to insert a new Farm into bd
    @staticmethod
    def create_farm(user_id, farm_name, longitude, latitude):
        farm = Farm(user_id=user_id, farm_name=farm_name, latitude=latitude, longitude=longitude)
        farm.save()
        return farm

