# Generated by Django 3.2.7 on 2022-01-20 22:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('EstadoAspiranteEmpresa', '0001_initial'),
        ('Aspirantessolicitados', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='aspirantessolicitados',
            name='estadoaspiranteempresa_idestadoaspiranteempresa',
            field=models.ForeignKey(db_column='EstadoAspiranteEmpresa_idEstadoAspiranteEmpresa', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='EstadoAspiranteEmpresa.estadoaspiranteempresa'),
        ),
    ]
