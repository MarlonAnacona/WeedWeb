from django.urls import path
from . import views

app_name='seeds'

urlpatterns = [     
    path('create-growing/', views.CreateGrowingInfoView.as_view(), name='create_growing'),
    path('update-growing/<int:pk>/', views.GrowingInfoUpdateView.as_view(), name='update_growing'),
    path('growing/<int:pk>/', views.RetriveGrowingOwnInfo.as_view(), name='GET_growing'),
    path('seed/<int:pk>/', views.RetriveSeedOwnInfo.as_view(), name='GET_seed'),
    path('create-seed/', views.CreateSeedInfoView.as_view(), name='create_seed'),
    path('update-seed/<int:pk>/', views.SeedUpdateView.as_view(), name='update_seed'),
    path('get-seed/', views.SeedListAPIView.as_view(), name='get_seed'),
]