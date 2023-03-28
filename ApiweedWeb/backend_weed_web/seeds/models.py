from django.db import models

# Create your models here.
class Seeds(models.Model):
    description=models.TextField()
    cbd = models.FloatField()
    thc = models.FloatField()
    species_name=models.CharField(unique=True,max_length=64)
    
    #Get the seed's description
    def __str__(self):
            return self.description

    #Get the seed's cdb percentage
    def get_cbd(self):
        return self.cbd

    #Get the seed's thc percentage
    def get_thc(self):
        return self.thc
    
    #Get the seed's species name
    def __str__(self):
            return self.species_name
    
    #Create seed function to insert a new Seed into bd
    @staticmethod
    def create_seed(description, cbd, thc, species_name):
        seed = Seeds(description=description, cbd=cbd, thc=thc, species_name=species_name)
        seed.save()
        return seed


