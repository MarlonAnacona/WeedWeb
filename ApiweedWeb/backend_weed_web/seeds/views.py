from django.shortcuts import render
from rest_framework import generics, permissions
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .serializers import GrowingInfoSerializer,SeedSerializer
from .models import Seeds, GrowingInfo
from .permissions import isOwnerPermissions

# Create your views here.

class CreateGrowingInfoView(generics.CreateAPIView):
    serializer_class = GrowingInfoSerializer
    permission_classes = [permissions.AllowAny]

class GrowingInfoUpdateView(generics.UpdateAPIView):
    serializer_class = GrowingInfoSerializer
    queryset = GrowingInfo.objects.all()
    lookup_field = "pk"
    
class RetriveGrowingOwnInfo(generics.RetrieveAPIView):    
    serializer_class = GrowingInfoSerializer
    queryset = GrowingInfo.objects.all()
    permission_classes = [permissions.IsAuthenticated,isOwnerPermissions]
    lookup_field = 'pk'

class CreateSeedInfoView(generics.CreateAPIView):
    serializer_class = SeedSerializer
    permission_classes = [permissions.AllowAny]

class SeedUpdateView(generics.UpdateAPIView):
    serializer_class = SeedSerializer
    queryset = Seeds.objects.all()
    lookup_field = "pk"
    
class RetriveSeedOwnInfo(generics.RetrieveAPIView):    
    serializer_class = SeedSerializer
    queryset = Seeds.objects.all()
    permission_classes = [permissions.IsAuthenticated,isOwnerPermissions]
    lookup_field = 'pk'

# Create your views here.
