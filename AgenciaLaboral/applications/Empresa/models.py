from django.db import models

# Create your models here.

from applications.Tipodocumento.models import Tipodocumento
from applications.Tipopersona.models  import Tipopersona
from applications.Actividadeconomica.models import Actividadeconomica
from applications.Ramaactividad.models import Ramaactividad
from applications.Sector.models import Sector
from applications.Tipoempresa.models import Tipoempresa


class Empresa(models.Model):
    idempresa = models.IntegerField(db_column='idEmpresa', primary_key=True)  # Field name made lowercase.
    ruc_cedula = models.CharField(db_column='ruc/cedula', max_length=45, blank=True, null=True)  # Field renamed to remove unsuitable characters.
    nombrecomercial = models.CharField(db_column='nombreComercial', max_length=45, blank=True, null=True)  # Field name made lowercase.
    razonsocial = models.CharField(db_column='razonSocial', max_length=45, blank=True, null=True)  # Field name made lowercase.
    calleprincipal = models.CharField(db_column='callePrincipal', max_length=45, blank=True, null=True)  # Field name made lowercase.
    callesecundaria = models.CharField(db_column='calleSecundaria', max_length=45, blank=True, null=True)  # Field name made lowercase.
    mz = models.CharField(max_length=45, blank=True, null=True)
    villa = models.CharField(max_length=45, blank=True, null=True)
    referencia = models.CharField(max_length=45, blank=True, null=True)
    telefonooficina = models.CharField(db_column='telefonoOficina', max_length=45, blank=True, null=True)  # Field name made lowercase.
    celular = models.CharField(max_length=45, blank=True, null=True)
    correoelectronico = models.CharField(db_column='correoElectronico', max_length=45, blank=True, null=True)  # Field name made lowercase.
    paginaweb = models.CharField(db_column='paginaWeb', max_length=45, blank=True, null=True)  # Field name made lowercase.
    tipodocumento_idtipodocumento = models.ForeignKey(Tipodocumento, models.DO_NOTHING, db_column='tipoDocumento_idtipoDocumento')  # Field name made lowercase.
    tipopersona_idtipopersona = models.ForeignKey(Tipopersona, models.DO_NOTHING, db_column='tipoPersona_idtipoPersona')  # Field name made lowercase.
    actividadeconomica_idactividadeconomica = models.ForeignKey(Actividadeconomica, models.DO_NOTHING, db_column='actividadEconomica_idactividadEconomica')  # Field name made lowercase.
    ramaactividad_idramaactividad = models.ForeignKey(Ramaactividad, models.DO_NOTHING, db_column='ramaActividad_idramaActividad')  # Field name made lowercase.
    sector_idsector = models.ForeignKey(Sector, models.DO_NOTHING, db_column='Sector_idSector')  # Field name made lowercase.
    tipoempresa_idtipoempresa = models.ForeignKey(Tipoempresa, models.DO_NOTHING, db_column='tipoEmpresa_idtipoEmpresa')  # Field name made lowercase.

    def __str__(self):
        txt = " Ruc/Cédula: {0} / Nombre Comercial: {1} "
        return txt.format(self.ruc_cedula , self.nombrecomercial) 

    class Meta:
        
        db_table = 'empresa'