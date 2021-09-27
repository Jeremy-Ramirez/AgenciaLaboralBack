from django.db import models

# Create your models here.


class Tipodocumento(models.Model):
    idtipodocumento = models.IntegerField(db_column='idtipoDocumento', primary_key=True)  # Field name made lowercase.
    descripcion = models.CharField(max_length=45, blank=True, null=True)

    def __str__(self):
        txt = "{0}"
        return txt.format( self.descripcion)
        
    class Meta:
        
        db_table = 'tipodocumento'
