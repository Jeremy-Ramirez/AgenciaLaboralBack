from django.shortcuts import render

# Create your views here.
from .models import Usuario
from rest_framework.response import Response
from .serializers import UsuarioSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.generics import get_object_or_404


from rest_framework.response import Response
# Create your views here.

class UsuarioApiView(APIView):
  
  def post(self, request):
      #if request.method == 'POST':
        usuario_serializer = UsuarioSerializer(data=request.data)
        if usuario_serializer.is_valid():
            usuario_serializer.save()
            return Response(usuario_serializer.data, status=status.HTTP_201_CREATED)
        return Response(usuario_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


  def get(self,request, pk=None, format=None):
        if pk:
            usuario= get_object_or_404(Usuario.objects.all(),pk=pk)
            usuario_serializer = UsuarioSerializer(usuario, many=False)
            return Response(usuario_serializer.data)
        usuarios= Usuario.objects.all()
        usuarios_serializer=UsuarioSerializer(usuarios,many=True)
        return Response(usuarios_serializer.data)

  def put(self, request, pk):
        usuario = get_object_or_404(Usuario.objects.all(),pk=pk)
        usuario_serializer = UsuarioSerializer(usuario, data=request.data, many=False)
        if usuario_serializer.is_valid(raise_exception=True):
            usuario_serializer.save()
            return Response(usuario_serializer.data)
        return Response(usuario_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

       