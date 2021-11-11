# Generated by Django 3.2.7 on 2021-11-11 01:41

import applications.Aspirante.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Profesiones', '0001_initial'),
        ('NivelEstudios', '0001_initial'),
        ('Usuario', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Aspirante',
            fields=[
                ('idaspirante', models.AutoField(db_column='idAspirante', primary_key=True, serialize=False)),
                ('numerohijos', models.IntegerField(blank=True, db_column='numeroHijos', null=True)),
                ('experiencialaboral', models.CharField(blank=True, db_column='experienciaLaboral', max_length=100, null=True)),
                ('campolaboral', models.CharField(blank=True, db_column='campoLaboral', max_length=100, null=True)),
                ('experticia', models.CharField(blank=True, max_length=800, null=True)),
                ('videopresentacion', models.FileField(blank=True, null=True, upload_to=applications.Aspirante.models.nameFile)),
                ('aniosexperiencia', models.IntegerField(blank=True, db_column='aniosExperiencia', null=True)),
                ('fechanacimiento', models.DateField(blank=True, db_column='fechaNacimiento', null=True)),
                ('posibilidadviajar', models.CharField(blank=True, db_column='posibilidadViajar', max_length=5, null=True)),
                ('posibilidadcambioresidencia', models.CharField(blank=True, db_column='posibilidadCambioResidencia', max_length=5, null=True)),
                ('estadoestudios', models.CharField(blank=True, db_column='estadoEstudios', max_length=50, null=True)),
                ('idiomas', models.CharField(blank=True, db_column='idiomas', max_length=500, null=True)),
                ('nivelestudios_idnivelestudios', models.ForeignKey(db_column='NivelEstudios_idNivelEstudios', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='NivelEstudios.nivelestudios')),
                ('profesiones_idprofesiones', models.ForeignKey(db_column='Profesiones_idProfesiones', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='Profesiones.profesiones')),
                ('usuario_idusuario', models.ForeignKey(db_column='usuario_idusuario', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='Usuario.usuario')),
            ],
            options={
                'db_table': 'aspirante',
            },
        ),
    ]
