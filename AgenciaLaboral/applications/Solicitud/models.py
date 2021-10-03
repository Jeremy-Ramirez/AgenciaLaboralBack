from django.db import models
from applications.Empresa.models import Empresa
from applications.Usuario.models import Usuario
from applications.Tiposolicitud.models import Tiposolicitud
from applications.Estado.models import Estado
from applications.Ciudad.models import Ciudad
from applications.Provincia.models import Provincia
#falta ciudad, provincia, idempresa, idusuario
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
    tiposolicitud_idtiposolicitud = models.ForeignKey(Tiposolicitud, models.DO_NOTHING, db_column='TipoSolicitud_idTipoSolicitud', null = True)  # Field name made lowercase.
    estado_idestado = models.ForeignKey(Estado, models.DO_NOTHING, db_column='Estado_idEstado', null = True)  # Field name made lowercase.
    #cambiar
    representante_idempresa = models.ForeignKey(Empresa, models.DO_NOTHING, db_column='Empresa_idEmpresa' , null = True)  # Field name made lowercase.
    usuario_idusuario = models.ForeignKey(Usuario, models.DO_NOTHING, db_column='Usuario_idUsuario' , null = True)  # Field name made lowercase.
    provincia_idprovincia = models.ForeignKey(Provincia, models.DO_NOTHING, db_column='provincia_idProvincia', null=True)  # Field name made lowercase.
    ciudad_idciudad = models.ForeignKey(Ciudad, models.DO_NOTHING, db_column='ciudad_idCiudad', null=True)  # Field name made lowercase.
    
      
    def __str__(self):
        txt = " Profesion: {0} / Cargo: {1} "
        return txt.format(self.profesion , self.cargo) 

    class Meta:
        verbose_name='Solicitud'
        verbose_name_plural='Solicituds'
        db_table = 'solicitud'

        def __str__(self):
            txt = " Profesion: {0} / Cargo: {1} "
            return txt.format(self.profesion , self.cargo) 
        