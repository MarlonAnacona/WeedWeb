from django.urls import path
from . import views

app_name='farms'

urlpatterns = [     
     path('farm/create/', views.CreateFarmView.as_view(), name='create_farm'),
     path('parcel/create/', views.CreateParcelView.as_view(), name='create_parcel'),
]