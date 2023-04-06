from django.urls import path
from . import views

app_name='users'

urlpatterns = [ 
    path('api/token/', views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', views.TokenRefreshView.as_view(), name='token_refresh'), 
    path('person/create/', views.CreatePersonView.as_view(), name='create_person'),
    path('company/create/', views.CreateCompanyView.as_view(), name='create_company'),
    path('person/<int:pk>/', views.RetrivePersonOwnInfo.as_view(), name='GET_person'),
    path('company/<int:pk>/', views.RetriveCompanyOwnInfo.as_view(), name='GET_company'),
    
]