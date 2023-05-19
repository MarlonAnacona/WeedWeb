from django.db import models

# Create your models here.


class Seeds(models.Model):
    species_name = models.CharField(unique=True, max_length=64)
    description = models.TextField()
    cbd = models.FloatField()
    thc = models.FloatField()
    
    # Get the seed's description
    def __str__(self):
        return self.description

    # Get the seed's cdb percentage
    def get_cbd(self):
        return self.cbd

    # Get the seed's thc percentage
    def get_thc(self):
        return self.thc

    # Get the seed's species name
    def __str__(self):
        return self.species_name

    # Create seed function to insert a new Seed into bd
    @classmethod
    def create_seed(cls,species_name, cbd, thc,description):
        seed = cls(species_name=species_name,description=description, cbd=cbd,
                    thc=thc)
        seed.save()
        return seed


class GrowingInfo(models.Model):
    CHOICES_DIFICULTY = (('Low', 'Low'), ('Medium low', 'Medium low'), ('Medium', 'Medium'),
                        ('Medium high', 'Medium high'), ('High', 'High'), ('Very high', 'Vey high'))
    seed_id = models.ForeignKey(
        Seeds, on_delete=models.CASCADE, null=False, blank=False)
    flowering_time = models.IntegerField(null=True, blank=False)
    harvest_time = models.IntegerField(null=True, blank=False)
    grow_dificulty = models.CharField(
        choices=CHOICES_DIFICULTY, max_length=30, default=None, blank=False, null=False)
    yield_outdoor = models.DecimalField(
        null=True, blank=False, max_digits=4, decimal_places=2)
    yield_indoor = models.DecimalField(
        null=True, blank=False, max_digits=4, decimal_places=2)

    @classmethod
    def create_info(cls, seed_id, flowering_time, harvest_time, grow_dificulty, yield_outdoor, yield_indoor):
        growInfo = cls(seed_id=seed_id, flowering_time=flowering_time, harvest_time=harvest_time,
                    grow_dificulty=grow_dificulty, yield_outdoor=yield_outdoor, yield_indoor=yield_indoor)
        growInfo.save()
        return growInfo