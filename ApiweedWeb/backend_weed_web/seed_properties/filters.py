from django_filters import rest_framework as filters
from .models import SeedEffect, SeedFlavor, SeedSmell 

class SeedFlavorFilter(filters.FilterSet):
    seed_id = filters.NumberFilter(field_name="seed_id", lookup_expr="exact")
    flavor_id = filters.NumberFilter(field_name = "flavor_id", lookup_expr= "exact")
    flavor = filters.CharFilter(field_name = "flavor_id__flavor_name", lookup_expr= "icontains")
    class Meta:
        model = SeedFlavor 
        fields = ['seed_id', 'flavor_id', 'flavor']

class SeedSmellFilter(filters.FilterSet):
    seed_id = filters.NumberFilter(field_name="seed_id", lookup_expr="exact")
    smell_id = filters.NumberFilter(field_name = "smell_id", lookup_expr= "exact")
    smell = filters.CharFilter(field_name = "smell_id__smell_name", lookup_expr= "icontains")
    class Meta:
        model = SeedSmell
        fields = ['seed_id', 'smell_id', 'smell']

class SeedEffectFilter(filters.FilterSet):
    seed_id = filters.NumberFilter(field_name="seed_id", lookup_expr="exact")
    effect_id = filters.NumberFilter(field_name = "effect_id", lookup_expr= "exact")
    effect = filters.CharFilter(field_name = "effect_id__effect_name", lookup_expr= "icontains")
    class Meta:
        model = SeedEffect
        fields = ['seed_id', 'effect_id', 'effect']

