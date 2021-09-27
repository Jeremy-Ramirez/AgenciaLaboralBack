from django.db import models

# Create your models here.



class Estado(models.Model):
    idestado = models.IntegerField(db_column='idEstado', primary_key=True)  # Field name made lowercase.
    estado = models.CharField(db_column='Estado', max_length=45, blank=True, null=True)  # Field name made lowercase.
    def __str__(self):
        txt = "{0}"
        return txt.format(self.estado)
    
    class Meta:
        
        db_table = 'estado'