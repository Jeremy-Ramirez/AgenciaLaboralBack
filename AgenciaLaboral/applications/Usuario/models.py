from django.db import models
from applications.Genero.models import Genero
from applications.Rol.models import Rol
from applications.Ciudad.models import Ciudad
from applications.Tipodocumento.models import Tipodocumento
from applications.Estadocivil.models import Estadocivil
from applications.Aspirante.models import Aspirante
from applications.Solicitud.models import Solicitud
from applications.Provincia.models import Provincia

class Usuario(models.Model):
    idusuario = models.AutoField(db_column='idUsuario', primary_key=True)  # Field name made lowercase.
    nombreusuario = models.CharField(db_column='nombreUsuario', max_length=45, blank=True, null=True)  # Field name made lowercase.
    contrasenia = models.CharField(max_length=16, blank=True, null=True)
    tipodocumento_idtipodocumento = models.ForeignKey(Tipodocumento, models.DO_NOTHING, db_column='tipodocumento_idtipodocumento',null=True)  # Field name made lowercase.
    nodocumento = models.CharField(max_length=45, blank=True, null=True)
    nombre = models.CharField(max_length=45, blank=True, null=True)
    apellido = models.CharField(max_length=45, blank=True, null=True)
    correo = models.CharField(max_length=45, blank=True, null=True)
    telefono = models.CharField(max_length=45, blank=True, null=True)
    direccion = models.CharField(max_length=45, blank=True, null=True)
    estadocuenta = models.CharField(db_column='estadoCuenta', max_length=45, blank=True, null=True)  # Field name made lowercase.
    genero_idgenero = models.ForeignKey(Genero, models.DO_NOTHING, db_column='Genero_idGenero')  # Field name made lowercase.
    rol_idrol = models.ForeignKey(Rol, models.DO_NOTHING, db_column='Rol_idRol')  # Field name made lowercase.
    estadocivil_idestadocivil = models.ForeignKey(Estadocivil, models.DO_NOTHING, db_column='EstadoCivil_idEstadoCivil')  # Field name made lowercase.
    provincia_idprovincia = models.ForeignKey(Provincia, models.DO_NOTHING, db_column='Provincia_idProvincia')  # Field name made lowercase.
    ciudad_idciudad = models.ForeignKey(Ciudad, models.DO_NOTHING, db_column='Ciudad_idCiudad')  # Field name made lowercase.

    def __str__(self):
        txt = " Cédula: {0} / Nombres: {1} {2} / Correo: {3} / Teléfono: {4} / Dirección: {5}"
        return txt.format(self.cedula , self.nombre , self.apellido , self.correo , self.telefono, self.direccion) 


    class Meta:
        
        db_table = 'usuario'
