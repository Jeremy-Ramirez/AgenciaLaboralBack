from django.shortcuts import render



from rest_framework.views import APIView
from .models import Tipodocumento
from .serializers import TipodocumentoSerializer

from rest_framework.response import Response



# Create your views here.

class TipodocumentoApiView(APIView):
   

  def get(self,request, format=None):
      tiposdocumentos= Tipodocumento.objects.all()
      tipodocumentos_serializer=TipodocumentoSerializer(tiposdocumentos,many=True)
      return Response(tipodocumentos_serializer.data)

