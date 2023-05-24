from django.urls import path
from . import views

APP_NAME = 'weather_api'

urlpatterns = [ 
    path('forecast/', views.ForecastWeatherAPIView.as_view(), name='Forecast Weather api'),
  
    
]