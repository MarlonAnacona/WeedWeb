from django.urls import path
from . import views

app_name='seed_properties'

urlpatterns = [     
    path('seed_flavors/', views.SeedFlavorList.as_view(), name='seed_flavors'),
    path('seed_smells/', views.SeedSmellList.as_view(), name='seed_smells'),
    path('seed_effects/', views.SeedEffectList.as_view(), name='seed_effects'),  
]