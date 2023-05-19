from django.shortcuts import render

from rest_framework import generics, permissions
from .filters import FarmFilters, ParcelFilters
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .serializers import FarmSerializer, ParcelSerializer
from .models import Farm, Parcel
from .permissions import IsFarmOwnerPermission, IsParcelOwnerPermission

# Create your views here.

"""class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class MyTokenRefreshView(TokenRefreshView):
    pass"""


class CreateFarmView(generics.CreateAPIView):
    serializer_class = FarmSerializer
    print("jdjd")
    permission_classes = [permissions.AllowAny]


class CreateParcelView(generics.CreateAPIView):
    serializer_class = ParcelSerializer
    permission_classes = [permissions.AllowAny]


class FarmUpdateAPIView(generics.UpdateAPIView):
    serializer_class = FarmSerializer
    queryset = Farm.objects.all()
    permission_classes = [permissions.IsAuthenticated, IsFarmOwnerPermission]
    lookup_field = "pk"


class ParcelUpdateAPIView(generics.UpdateAPIView):
    serializer_class = ParcelSerializer
    queryset = Farm.objects.all()
    permission_classes = [permissions.IsAuthenticated, IsParcelOwnerPermission]
    lookup_field = "pk"


class FarmListAPIView(generics.ListAPIView):
    serializer_class = FarmSerializer
    queryset = Farm.objects.all()
    filterset_class = FarmFilters
    permission_classes = [permissions.IsAuthenticated, IsFarmOwnerPermission]

    def get_queryset(self):
        my_user = self.request.user
        self.queryset = Farm.objects.filter(pk = my_user.id)
        print("kdkd")
        return queryset


class ParcelListAPIView(generics.ListAPIView):
    serializer_class = ParcelSerializer
    queryset = Parcel.objects.all()
    filterset_class = ParcelFilters
    permission_classes = [permissions.IsAuthenticated, IsParcelOwnerPermission]




