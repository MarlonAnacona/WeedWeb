from django.shortcuts import render

from rest_framework import generics, permissions
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .serializers import FarmSerializer, ParcelSerializer
from .models import Farm, Parcel
from .permissions import isOwnerPermissions

# Create your views here.

"""class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class MyTokenRefreshView(TokenRefreshView):
    pass"""


class CreateFarmView(generics.CreateAPIView):
    serializer_class = FarmSerializer
    permission_classes = [permissions.AllowAny]


class CreateParcelView(generics.CreateAPIView):
    serializer_class = ParcelSerializer
    permission_classes = [permissions.AllowAny]





