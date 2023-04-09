from django.urls import path
from . import views

app_name='farms'

urlpatterns = [     
     path('create-farm/', views.CreateFarmView.as_view(), name='create_farm'),
     path('create-parcel/', views.CreateParcelView.as_view(), name='create_parcel'),
     path('update-farm/<int:pk>/', views.FarmUpdateAPIView.as_view(), name='update_farm'),
     path('update-parcel/<int:pk>/', views.ParcelUpdateAPIView.as_view(), name='update_parcel'),
]