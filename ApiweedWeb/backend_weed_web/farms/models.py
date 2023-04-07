import datetime
from django.db import models
from django.utils import timezone
from users.models import Customer
from seeds.models import Seeds


#Farm's model with the atributes: user_id, farm_name, longitude and latitude
#Parcel's model with the atributes: farm_id, seed_id, width, length, crop_modality 
#act: 02/04/2023
class Farm(models.Model):
    user_id = models.ForeignKey(Customer, null = False, blank = False, on_delete = models.CASCADE)
    farm_name = models.CharField(null = False, blank = False, max_length = 64)
    longitude = models.DecimalField(null = False, blank = False, max_digits=9, decimal_places=6)
    latitude = models.DecimalField(null = False, blank = False, max_digits=9, decimal_places=6)
    date_creation_farm = models.DateField(null = False, default = datetime.date.today)

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
    @classmethod
    def create_farm(cls, user_id, farm_name, longitude, latitude, date_creation_farm):
        farm = cls(user_id=user_id, farm_name=farm_name, latitude=latitude, longitude=longitude, date_creation_farm=date_creation_farm)
        farm.save()
        return farm


class Parcel(models.Model):
    CHOICES_CROP_MODALITY = (('Outdoor', 'Outdoor'), ('Indoor', 'Indoor'))

    farm_id =  models.ForeignKey(Farm, null = False, blank = False, on_delete = models.CASCADE)
    seed_id = models.ForeignKey(Seeds, null = False, blank = False, on_delete = models.CASCADE)
    width = models.DecimalField(null=True, blank=False, max_digits=5, decimal_places=2)
    length = models.DecimalField(null=True, blank=False, max_digits=5, decimal_places=2)
    crop_modality = models.CharField(choices=CHOICES_CROP_MODALITY, max_length=30, default=None, blank=False, null=False)
    date_creation_parcel = models.DateField(null = False, default = timezone.now)



    #Get the farm's id
    def get_farm_id(self):
        return self.farm_id

    #Get the seed's id
    def get_seeed_id(self):
        return self.seeed_id


    @classmethod
    def create_parcel(cls, farm_id, seed_id, width, length, crop_modality, date_creation_parcel):
        parcel = cls(farm_id=farm_id, seed_id=seed_id, width=width, length=length, crop_modality=crop_modality, date_creation_parcel=date_creation_parcel)
        parcel.save()
        return parcel

