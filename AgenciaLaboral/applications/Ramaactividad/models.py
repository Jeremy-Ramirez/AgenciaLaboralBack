from django.db import models

# Create your models here.


class Ramaactividad(models.Model):
    idramaactividad = models.AutoField(db_column='idramaActividad', primary_key=True)  # Field name made lowercase.
    descripcion = models.CharField(max_length=45, unique=True, null=True)

    def __str__(self):
        txt = "{0}"
        return txt.format( self.descripcion)

    class Meta:
        verbose_name='Ramaactividad'
        verbose_name_plural='Ramaactividads'
        db_table = 'ramaactividad'

        
        def __str__(self):
            return self.descripcion