from rest_framework import serializers
from .models import Farm, Parcel



"""
Serializer for the `Farm` model.

Fields:
- user_id: Integer field. Required.
- farm_name: Char field.
- longitude: Decimal field.
- latitude: Decimal field.
- date_creation_farm: Date field.

Extra kwargs:
- user_id: Required field.

Methods:
- create_farm: Creates and saves a new farm instance with the validated data.
- update_farm: Updates a farm instance with the validated data.

"""

class FarmSerializer(serializers.ModelSerializer):

    class Meta:
        model = Farm
        fields = [
            "user_id",
            "farm_name",
            "longitude",
            "latitude",
            "date_creation_farm"
        ]

        extra_kwargs = {
            "user_id":{"required" : True},
            "date_creation_farm":{"read_only" : True}
        }



    def create(self, validated_data):
        farm = Farm(**validated_data)

        

        farm.save()
        return farm

    def update(self, instance, validated_data):
        instance.farm_name = validated_data.get('farm_name', instance.farm_name)
        instance.longitude = validated_data.get('longitude', instance.longitude)
        instance.latitude = validated_data.get('latitude', instance.latitude)
        instance.save()
        return instance




"""
Serializer for the `Parcel` model.

Fields:
- farm_id: Integer field. Required.
- seed_id: Integer field. Required.
- width: Decimal field.
- length: Decimal field.
- crop_modality: Char field.
- date_creation_parcel: Date field.

Extra kwargs:
- farm_id: Required field.
- seed_id: Required field.

Methods:
- create_parcel: Creates and saves a new parcel instance with the validated data.
- update_parcel: Updates a parcel instance with the validated data.

"""

class ParcelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Parcel
        fields = [
            "farm_id",
            "seed_id",
            "width",
            "length",
            "crop_modality",
            "date_creation_parcel"
        ]

        extra_kwargs = {
            "farm_id":{"required" : True},
            "seed_id":{"required" : True},
            "date_creation_parcel":{"read_only" : True}
        }



    def create(self, validated_data):
        parcel = Parcel(**validated_data)
        parcel.save()
        return parcel

    def update(self, instance, validated_data):
        instance.seed_id = validated_data.get('seed_id', instance.seed_id)
        instance.width = validated_data.get('width', instance.width)
        instance.length = validated_data.get('length', instance.length)
        instance.crop_modality = validated_data.get('crop_modality', instance.crop_modality)
        instance.save()
        return instance



