from django.db import models

# Create your models here.
from applications.Solicitud.models import Solicitud
from applications.Estado.models import Estado

class Aspirantessolicitados(models.Model):
    idaspirantessolicitados = models.IntegerField(db_column='idAspirantesSolicitados', primary_key=True)  # Field name made lowercase.
    fechaaceptacion = models.DateTimeField(db_column='fechaAceptacion', blank=True, null=True)  # Field name made lowercase.
    solicitud_idsolicitud = models.ForeignKey(Solicitud, models.DO_NOTHING, db_column='Solicitud_idSolicitud')  # Field name made lowercase.
    estado_idestado = models.ForeignKey(Estado, models.DO_NOTHING, db_column='Estado_idEstado')  # Field name made lowercase.

    class Meta:
        
        db_table = 'aspirantessolicitados'
        unique_together = (('idaspirantessolicitados', 'estado_idestado'),)