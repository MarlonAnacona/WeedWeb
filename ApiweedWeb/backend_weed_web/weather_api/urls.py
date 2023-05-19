from django.urls import path
from . import views

APP_NAME = 'weather_api'

urlpatterns = [ 
    path('forecast/', views.WeatherAPIListView.as_view(), name='Weather api list'),
  
    
]