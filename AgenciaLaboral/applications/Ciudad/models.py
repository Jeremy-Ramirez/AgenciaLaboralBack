from django.db import models

# Create your models here.
from applications.Provincia.models import Provincia
        
class Ciudad(models.Model):
    idciudad = models.IntegerField(db_column='idCiudad', primary_key=True)  # Field name made lowercase.
    nombreciudad = models.CharField(db_column='nombreCiudad', max_length=45, blank=True, null=True)  # Field name made lowercase.
    provincia_idprovincia = models.ForeignKey(Provincia, models.DO_NOTHING, db_column='Provincia_idProvincia')  # Field name made lowercase.

    def __str__(self):
        txt = "{0}"
        return txt.format(self.nombreciudad) 
        
    class Meta:
        
        db_table = 'ciudad'