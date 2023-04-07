from django.urls import path
from . import views

app_name='farms'

urlpatterns = [     
     path('create_farm/', views.CreateFarmView.as_view(), name='create_farm'),
     path('create_parcel/', views.CreateParcelView.as_view(), name='create_parcel'),
]