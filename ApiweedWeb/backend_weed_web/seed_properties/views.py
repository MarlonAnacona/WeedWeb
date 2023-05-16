from django.shortcuts import render
from .models import SeedFlavor, SeedEffect, SeedSmell
from rest_framework import generics
from .serializers import SeedFlavorSerializer, SeedEffectSerializer, SeedSmellSerializer

class SeedFlavorListView(generics.ListAPIView):
    queryset = SeedFlavor.objects.all()
    serializer_class = SeedFlavorSerializer

class SeedEffectListView(generics.ListAPIView):
    queryset = SeedEffect.objects.all()
    serializer_class = SeedEffectSerializer

class SeedSmellListView(generics.ListAPIView):
    queryset = SeedSmell.objects.all()
    serializer_class = SeedSmellSerializer


# Create your views here.
