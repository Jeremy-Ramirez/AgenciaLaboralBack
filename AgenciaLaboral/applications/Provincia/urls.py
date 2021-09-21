from applications.Provincia.serializers import ProvinciaSerializer
from django.urls import path, include
from . import views
from .views import *


urlpatterns = [
  
     path('provincias/', views.ProvinciaApiView.as_view(), name='provincias api'),
   
]