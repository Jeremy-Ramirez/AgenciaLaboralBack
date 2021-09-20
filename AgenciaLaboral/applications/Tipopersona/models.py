from django.db import models

# Create your models here.

class Tipopersona(models.Model):
    idtipopersona = models.IntegerField(db_column='idtipoPersona', primary_key=True)  # Field name made lowercase.
    descripcion = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        
        db_table = 'tipopersona'