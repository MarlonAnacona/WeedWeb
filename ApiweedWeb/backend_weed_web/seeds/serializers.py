from rest_framework import serializers
from .models import Seeds, GrowingInfo


class GrowingInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = GrowingInfo
        fields = [
            "seed_id",
            "flowering_time",
            "harvest_time",
            "grow_dificulty",
            "yield_outdoor",
            "yield_indoor"
        ]

        extra_kwargs = {
            "seed_id":{"required" : True}
        }
        
    
    
    def create(self, validated_data):
        growingInfo = GrowingInfo(**validated_data)
        growingInfo.save()
        return growingInfo
    
    def update(self, instance, validated_data):
        instance.seed_id = validated_data.get('seed_id', instance.seed_id)
        instance.flowering_time = validated_data.get('flowering_time', instance.flowering_time)
        instance.harvest_time = validated_data.get('harvest_time', instance.harvest_time)
        instance.grow_dificulty = validated_data.get('grow_dificulty', instance.grow_dificulty)
        instance.yield_outdoor = validated_data.get('yield_outdoor', instance.yield_outdoor)
        instance.yield_indoor = validated_data.get('yield_indoor', instance.yield_indoor)
        instance.save()
        return instance
