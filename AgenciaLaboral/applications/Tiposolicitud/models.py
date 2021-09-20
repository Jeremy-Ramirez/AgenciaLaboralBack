from django.db import models

# Create your models here.
class Tiposolicitud(models.Model):
    idtiposolicitud = models.IntegerField(db_column='idTipoSolicitud', primary_key=True)  # Field name made lowercase.
    descrpcion = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        
        db_table = 'tiposolicitud'