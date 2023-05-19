from django.shortcuts import render
from .models import SeedFlavor, SeedEffect, SeedSmell
from rest_framework import generics, permissions
from .serializers import SeedFlavorSerializer, SeedEffectSerializer, SeedSmellSerializer
from .filters import SeedFlavorFilter, SeedEffectFilter, SeedSmellFilter
from django_filters import rest_framework as filters

class SeedFlavorList(generics.ListAPIView):
    queryset = SeedFlavor.objects.all()
    serializer_class = SeedFlavorSerializer
    filter_backends = [filters.DjangoFilterBackend]
    filterset_class = SeedFlavorFilter

    permission_classes = [permissions.AllowAny]


class SeedEffectList(generics.ListAPIView):
    queryset = SeedEffect.objects.all()
    serializer_class = SeedEffectSerializer
    filter_backends = [filters.DjangoFilterBackend]
    filterset_class = SeedEffectFilter

    permission_classes = [permissions.AllowAny]

class SeedSmellList(generics.ListAPIView):
    queryset = SeedSmell.objects.all()
    serializer_class = SeedSmellSerializer
    filter_backends = [filters.DjangoFilterBackend]
    filterset_class = SeedSmellFilter

    permission_classes = [permissions.AllowAny]


# Create your views here.
