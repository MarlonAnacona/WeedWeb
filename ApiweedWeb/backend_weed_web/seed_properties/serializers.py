from rest_framework import serializers
from .models import SeedEffect, SeedFlavor, SeedSmell

class SeedEffectSerializer(serializers.ModelSerializer):
    class Meta: 
        model = SeedEffect
        fields = [
            'seed_id',
            'effect_id'
        ]
        extra_kwargs = {
            "seed_id": {"required": True}
        }

class SeedFlavorSerializer(serializers.ModelSerializer):

    class Meta: 
        model = SeedFlavor
        fields = [
            'seed_id',
            'flavor_id'
        ]
        extra_kwargs = {
            "seed_id": {"required": True}
        }

class SeedSmellSerializer(serializers.ModelSerializer):
    class Meta: 
        model = SeedSmell
        fields = [
            'seed_id',
            'smell_id'
        ]
        extra_kwargs = {
            "seed_id": {"required": True}
        }