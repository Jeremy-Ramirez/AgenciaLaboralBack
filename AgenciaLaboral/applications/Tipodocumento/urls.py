from applications.Genero.serializers import GeneroSerializer
from django.urls import path, include
from . import views
from .views import *

urlpatterns = [
  
     path('tipodocumento/', views.TipodocumentoApiView.as_view(), name='tipo documentos api'),
     path('tipodocumento/<int:pk>', TipodocumentoApiView.as_view()),
   
]
