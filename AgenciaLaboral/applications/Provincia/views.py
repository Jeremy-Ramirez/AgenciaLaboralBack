from django.shortcuts import render

# Create your views here.

from rest_framework.views import APIView
from .models import Provincia
from .serializers import ProvinciaSerializer

from rest_framework.response import Response


# Create your views here.

class ProvinciaApiView(APIView):
   

  def get(self,request, format=None):
      provincias= Provincia.objects.all()
      provincia_serializer=ProvinciaSerializer(provincias,many=True)
      return Response(provincia_serializer.data)
