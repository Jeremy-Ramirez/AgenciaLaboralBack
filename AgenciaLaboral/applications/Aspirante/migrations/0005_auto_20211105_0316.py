# Generated by Django 3.2.7 on 2021-11-05 03:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('NivelEstudios', '0001_initial'),
        ('Aspirante', '0004_auto_20211104_2023'),
    ]

    operations = [
        migrations.AddField(
            model_name='aspirante',
            name='estadoestudios',
            field=models.CharField(blank=True, db_column='estadoEstudios', max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='aspirante',
            name='idiomas',
            field=models.CharField(blank=True, db_column='idiomas', max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='aspirante',
            name='nivelestudios_idnivelestudios',
            field=models.ForeignKey(db_column='NivelEstudios_idNivelEstudios', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='NivelEstudios.nivelestudios'),
        ),
        migrations.AddField(
            model_name='aspirante',
            name='posibilidadcambioresidencia',
            field=models.CharField(blank=True, db_column='posibilidadCambioResidencia', max_length=5, null=True),
        ),
        migrations.AlterField(
            model_name='aspirante',
            name='experiencialaboral',
            field=models.CharField(blank=True, db_column='experienciaLaboral', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='aspirante',
            name='experticia',
            field=models.CharField(blank=True, max_length=800, null=True),
        ),
        migrations.AlterField(
            model_name='aspirante',
            name='posibilidadviajar',
            field=models.CharField(blank=True, db_column='posibilidadViajar', max_length=5, null=True),
        ),
    ]
