from rest_framework import serializers


class WeatherAPISerializer(serializers.Serializer):
    weather_data = serializers.DictField()
    