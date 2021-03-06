# Generated by Django 3.2.7 on 2021-12-16 01:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Provincia', '0001_initial'),
        ('Ciudad', '0001_initial'),
        ('Representanteempresa', '0001_initial'),
        ('Estado', '0001_initial'),
        ('Tiposolicitud', '0001_initial'),
        ('Profesiones', '0001_initial'),
        ('NivelEstudios', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Solicitud',
            fields=[
                ('idsolicitud', models.AutoField(db_column='idSolicitud', primary_key=True, serialize=False)),
                ('aniosexperiencia', models.IntegerField(blank=True, db_column='aniosExperiencia', null=True)),
                ('rangoedad', models.CharField(blank=True, db_column='rangoEdad', max_length=45, null=True)),
                ('experticia', models.CharField(blank=True, max_length=45, null=True)),
                ('sueldo', models.FloatField(blank=True, null=True)),
                ('fechainicio', models.DateField(blank=True, db_column='fechaInicio', null=True)),
                ('fechacierre', models.DateField(blank=True, db_column='fechaCierre', null=True)),
                ('cargo', models.CharField(blank=True, max_length=100, null=True)),
                ('descripcioncargo', models.TextField(blank=True, db_column='descripcionCargo', null=True)),
                ('jornada', models.CharField(blank=True, max_length=45, null=True)),
                ('discapacidad', models.CharField(blank=True, max_length=45, null=True)),
                ('posibilidadviajar', models.CharField(blank=True, db_column='posibilidadViajar', max_length=5, null=True)),
                ('posibilidadcambioresidencia', models.CharField(blank=True, db_column='posibilidadCambioResidencia', max_length=5, null=True)),
                ('licencia', models.CharField(blank=True, max_length=45, null=True)),
                ('idiomas', models.CharField(blank=True, max_length=45, null=True)),
                ('ciudad_idciudad', models.ForeignKey(db_column='ciudad_idCiudad', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='Ciudad.ciudad')),
                ('estado_idestado', models.ForeignKey(db_column='Estado_idEstado', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='Estado.estado')),
                ('nivelestudios_idnivelestudios', models.ForeignKey(db_column='NivelEstudios_idNivelEstudios', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='NivelEstudios.nivelestudios')),
                ('profesiones_idprofesiones', models.ForeignKey(db_column='Profesiones_idProfesiones', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='Profesiones.profesiones')),
                ('provincia_idprovincia', models.ForeignKey(db_column='provincia_idProvincia', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='Provincia.provincia')),
                ('representante_idrepresentante', models.ForeignKey(db_column='representante_idrepresentante', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='Representanteempresa.representanteempresa')),
                ('tiposolicitud_idtiposolicitud', models.ForeignKey(db_column='TipoSolicitud_idTipoSolicitud', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='Tiposolicitud.tiposolicitud')),
            ],
            options={
                'verbose_name': 'Solicitud',
                'verbose_name_plural': 'Solicituds',
                'db_table': 'solicitud',
            },
        ),
    ]
