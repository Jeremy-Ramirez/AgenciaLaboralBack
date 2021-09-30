
from rest_framework import serializers
from .models import Representanteempresa

class RepresentanteEmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Representanteempresa
        fields='__all__'