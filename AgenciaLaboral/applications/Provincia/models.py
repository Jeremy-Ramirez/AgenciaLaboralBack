from django.db import models

# Create your models here.

class Provincia(models.Model):
    idprovincia = models.IntegerField(db_column='idProvincia', primary_key=True)  # Field name made lowercase.
    nombreprovincia = models.CharField(db_column='nombreProvincia', max_length=45, blank=True, null=True)  # Field name made lowercase.

    def __str__(self):
        txt = "{0}"
        return txt.format(self.provincia)
        
    class Meta:
        verbose_name='Provincia'
        verbose_name_plural='Provincias'
        db_table = 'provincia'

        def __str__(self):
            return self.nombreprovincia