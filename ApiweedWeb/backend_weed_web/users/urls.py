from django.urls import path
from . import views

app_name='users'

urlpatterns = [ 
    path('api/token/', views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', views.TokenRefreshView.as_view(), name='token_refresh'),    
    
]