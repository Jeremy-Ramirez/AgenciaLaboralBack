from django.db import models

# Create your models here.

class Rol(models.Model):
    idrol = models.IntegerField(db_column='idRol', primary_key=True)  # Field name made lowercase.
    nombrerol = models.CharField(db_column='nombreRol', max_length=45, blank=True, null=True)  # Field name made lowercase.
    descripcion = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
    
        db_table = 'rol'
