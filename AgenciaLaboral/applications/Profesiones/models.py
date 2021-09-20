from django.db import models

# Create your models here.


class Profesiones(models.Model):
    idprofesiones = models.IntegerField(db_column='idProfesiones', primary_key=True)  # Field name made lowercase.
    profesion = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        
        db_table = 'profesiones'