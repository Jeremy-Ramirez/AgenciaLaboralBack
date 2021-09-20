from django.db import models

# Create your models here.

class Tipoempresa(models.Model):
    idtipoempresa = models.IntegerField(db_column='idtipoEmpresa', primary_key=True)  # Field name made lowercase.
    descripcion = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        
        db_table = 'tipoempresa'