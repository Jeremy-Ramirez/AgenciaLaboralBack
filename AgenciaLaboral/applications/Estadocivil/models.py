from django.db import models

# Create your models here.

class Estadocivil(models.Model):
    idestadocivil = models.IntegerField(db_column='idEstadoCivil', primary_key=True)  # Field name made lowercase.
    estadocivil = models.CharField(db_column='estadoCivil', max_length=45, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        
        db_table = 'estadocivil'
