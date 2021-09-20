from django.db import models

# Create your models here.
from applications.Tiposolicitud.models import Tiposolicitud
from applications.Estado.models import Estado

class Solicitud(models.Model):
    idsolicitud = models.IntegerField(db_column='idSolicitud', primary_key=True)  # Field name made lowercase.
    profesion = models.CharField(max_length=45, blank=True, null=True)
    aniosexperiencia = models.IntegerField(db_column='aniosExperiencia', blank=True, null=True)  # Field name made lowercase.
    rangoedad = models.CharField(db_column='rangoEdad', max_length=45, blank=True, null=True)  # Field name made lowercase.
    experticia = models.CharField(max_length=45, blank=True, null=True)
    sueldo = models.FloatField(blank=True, null=True)
    fechainicio = models.DateTimeField(db_column='fechaInicio', blank=True, null=True)  # Field name made lowercase.
    fechacierre = models.DateTimeField(db_column='fechaCierre', blank=True, null=True)  # Field name made lowercase.
    cargo = models.CharField(max_length=45, blank=True, null=True)
    descripcioncargo = models.CharField(db_column='descripcionCargo', max_length=200, blank=True, null=True)  # Field name made lowercase.
    tiposolicitud_idtiposolicitud = models.ForeignKey(Tiposolicitud, models.DO_NOTHING, db_column='TipoSolicitud_idTipoSolicitud')  # Field name made lowercase.
    estado_idestado = models.ForeignKey(Estado, models.DO_NOTHING, db_column='Estado_idEstado')  # Field name made lowercase.

    class Meta:
        
        db_table = 'solicitud'