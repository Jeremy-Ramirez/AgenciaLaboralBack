from django.shortcuts import render





from rest_framework.views import APIView
from .models import Ciudad
from .serializers import CiudadSerializer

from rest_framework.response import Response



# Create your views here.

class CiudadApiView(APIView):
   

  def get(self,request, format=None):
      ciudades= Ciudad.objects.all()
      ciudad_serializer=CiudadSerializer(ciudades,many=True)
      return Response(ciudad_serializer.data)
