from django.db import models

# Create your models here.
class Genero(models.Model):
    idgenero = models.IntegerField(db_column='idGenero', primary_key=True)  # Field name made lowercase.
    genero = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        verbose_name='Genero'
        verbose_name_plural='Generos'
        db_table = 'genero'


        def __str__(self):
            return self.genero