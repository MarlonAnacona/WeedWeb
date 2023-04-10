from django.urls import path
from . import views

app_name='seeds'

urlpatterns = [     
    path('create-growing/', views.CreateGrowingInfoView.as_view(), name='create_growing'),
    path('update-growing/<int:pk>/', views.GrowingInfoUpdateView.as_view(), name='update_growing')
]