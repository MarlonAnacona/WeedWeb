from rest_framework import serializers
from .models import SeedEffect, SeedFlavor, SeedSmell, Flavor, Effect, Smell

class EffectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Effect
        fields = ['effect_name']

class SeedEffectSerializer(serializers.ModelSerializer):
    effect= serializers.StringRelatedField(source='effect_id')
    class Meta: 
        model = SeedEffect
        fields = [
            'seed_id',
            'effect_id',
            'effect'
        ]
        extra_kwargs = {
            "seed_id": {"required": True}
        }


class FlavorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flavor
        fields = ['flavor_name']

class SeedFlavorSerializer(serializers.ModelSerializer):
    flavor = serializers.StringRelatedField(source='flavor_id')

    class Meta: 
        model = SeedFlavor
        fields = [
            'seed_id',
            'flavor_id',
            'flavor'
        ]
        extra_kwargs = {
            "seed_id": {"required": True}
        }

class SmellSerializer(serializers.ModelSerializer):
    class Meta:
        model = Smell
        fields = ['smell_name']


class SeedSmellSerializer(serializers.ModelSerializer):
    smell = serializers.StringRelatedField(source='smell_id')
    class Meta: 
        model = SeedSmell
        fields = [
            'seed_id',
            'smell_id',
            'smell'
        ]
        extra_kwargs = {
            "seed_id": {"required": True}
        }