from applications.Usuario.serializers import UsuarioSerializer
from django.urls import path, include
from . import views
from .views import *

urlpatterns = [
  
     path('usuarios/', views.UsuarioApiView.as_view(), name='usuarios api'),
     path('usuarios/<int:pk>', views.UsuarioApiView.as_view()),
     path('login', LoginView.as_view()),
     path('user', UsuarioView.as_view()),
     path('logout', LogoutView.as_view())
   
]
