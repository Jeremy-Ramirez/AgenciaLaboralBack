from django.db import models

# Create your models here.


class Tipodocumento(models.Model):
    idtipodocumento = models.IntegerField(db_column='idtipoDocumento', primary_key=True)  # Field name made lowercase.
    descripcion = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        
        db_table = 'tipodocumento'
