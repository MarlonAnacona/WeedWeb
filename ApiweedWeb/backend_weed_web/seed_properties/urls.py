from django.urls import path
from . import views

app_name='seed_properties'

urlpatterns = [     
    path('seed_flavors/', views.SeedFlavorListView.as_view(), name='seed_flavors'),
    path('seed_smells/', views.SeedSmellListView.as_view(), name='seed_smells'),
    path('seed_effects/', views.SeedEffectListView.as_view(), name='seed_effects'),  
]