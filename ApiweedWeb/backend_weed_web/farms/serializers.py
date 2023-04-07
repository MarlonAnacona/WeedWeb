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
            "user_id":{"required" : True}
        }



    def create(self, validated_data):
            farm = Farm(**validated_data)

            farm.save()

            return farm




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
- create_parcel: Creates and saves a new farm instance with the validated data.

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
            "seed_id":{"required" : True}
        }



    def create(self, validated_data):
            parcel = Parcel(**validated_data)

            parcel.save()

            return parcel



