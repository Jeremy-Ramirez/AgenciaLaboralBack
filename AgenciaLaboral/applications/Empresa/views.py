from django.shortcuts import render
from rest_framework.generics import get_object_or_404
from rest_framework.views import APIView
from .models import Empresa
from .serializers import EmpresaSerializer
from rest_framework.response import Response


class EmpresaApiView(APIView):
   
  def get(self, request, pk=None):
        if pk:
            empresa = get_object_or_404(Empresa.objects.all(), pk=pk)
            serializer = EmpresaSerializer(empresa)
            return Response({"empresa": serializer.data})
        empresas = Empresa.objects.all()
        serializer = EmpresaSerializer(empresas, many=True)
        return Response({"empresas": serializer.data})

  def post(self, request):
        empresa = request.data
        serializer = EmpresaSerializer(data=empresa)
        if serializer.is_valid(raise_exception=True):
            empresa_saved = serializer.save()
        return Response({"success": "Empresa '{}' created successfully".format(empresa_saved.nombrecomercial)})
  
  def put(self, request, pk):
        saved_empresa = get_object_or_404(Empresa.objects.all(), pk=pk)
        data = request.data
        serializer = EmpresaSerializer(instance=saved_empresa, data=data, partial=True)

        if serializer.is_valid(raise_exception=True):
            empresa_saved = serializer.save()
        return Response({"success": "Empresa '{}' updated successfully".format(empresa_saved.nombrecomercial)})
  
  def delete(self, request, pk):
        empresa = get_object_or_404(Empresa.objects.all(), pk=pk)
        empresa.delete()
        return Response({"message": "Empresa with id `{}` has been deleted.".format(pk)},status=204)