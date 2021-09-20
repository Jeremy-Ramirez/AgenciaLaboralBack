from django.db import models

# Create your models here.


from applications.Usuario.models import Usuario

class Sugerencia(models.Model):
    idsugerencia = models.IntegerField(db_column='idSugerencia', primary_key=True)  # Field name made lowercase.
    titulo = models.CharField(max_length=45, blank=True, null=True)
    descripcion = models.CharField(max_length=45, blank=True, null=True)
    imagen = models.TextField(blank=True, null=True)
    usuario_idusuario = models.ForeignKey(Usuario, models.DO_NOTHING, db_column='Usuario_idUsuario')  # Field name made lowercase.

    class Meta:
        
        db_table = 'sugerencia'