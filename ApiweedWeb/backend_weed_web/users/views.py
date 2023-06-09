from django.shortcuts import render
from rest_framework import generics, permissions
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .serializers import MyTokenObtainPairSerializer, PersonSerializer, CompanySerializer
from .models import Person, Company
from .permissions import IsOwnerPermission

# Create your views here.

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class MyTokenRefreshView(TokenRefreshView):
    pass


class CreatePersonView(generics.CreateAPIView):
    serializer_class = PersonSerializer
    permission_classes = [permissions.AllowAny]


class CreateCompanyView(generics.CreateAPIView):
    serializer_class = CompanySerializer
    permission_classes = [permissions.AllowAny]


class RetrivePersonOwnInfo(generics.RetrieveAPIView):    
    serializer_class = PersonSerializer
    queryset = Person.objects.all()
    #permission_classes = [permissions.IsAuthenticated, IsOwnerPermission]
    permission_classes = [permissions.AllowAny]
    lookup_field = 'pk'


class RetriveCompanyOwnInfo(generics.RetrieveAPIView):
    serializer_class = CompanySerializer
    queryset = Company.objects.all()
    permission_classes = [permissions.IsAuthenticated, IsOwnerPermission]
    lookup_field = 'pk'

