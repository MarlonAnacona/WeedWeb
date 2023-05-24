from django_filters import rest_framework as filters
from .models import SeedEffect, SeedFlavor, SeedSmell 

class SeedFlavorFilter(filters.FilterSet):
    seed_id = filters.NumberFilter(field_name="seed_id", lookup_expr="exact")
    flavor_id = filters.CharFilter(field_name = "flavor_id", lookup_expr= "exact")
    class Meta:
        model = SeedFlavor
        fields = ['seed_id', 'flavor_id']

class SeedSmellFilter(filters.FilterSet):
    seed_id = filters.NumberFilter(field_name="seed_id", lookup_expr="exact")
    smell_id = filters.CharFilter(field_name = "smell_id", lookup_expr= "exact")
    class Meta:
        model = SeedSmell
        fields = ['seed_id', 'smell_id']

class SeedEffectFilter(filters.FilterSet):
    seed_id = filters.NumberFilter(field_name="seed_id", lookup_expr="exact")
    effect_id = filters.CharFilter(field_name = "effect_id", lookup_expr= "exact")
    class Meta:
        model = SeedEffect
        fields = ['seed_id', 'effect_id']

