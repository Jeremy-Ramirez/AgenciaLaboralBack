# Generated by Django 3.2.6 on 2021-08-26 07:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Solicitud', '0001_initial'),
        ('Profesiones', '0001_initial'),
        ('Aspirantessolicitados', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Aspirante',
            fields=[
                ('idaspirante', models.IntegerField(db_column='idAspirante', primary_key=True, serialize=False)),
                ('profesion', models.CharField(blank=True, max_length=45, null=True)),
                ('numerohijos', models.IntegerField(blank=True, db_column='numeroHijos', null=True)),
                ('experiencialaboral', models.CharField(blank=True, db_column='experienciaLaboral', max_length=45, null=True)),
                ('campolaboral', models.CharField(blank=True, db_column='campoLaboral', max_length=45, null=True)),
                ('experticia', models.CharField(blank=True, max_length=45, null=True)),
                ('videopresentacion', models.TextField(blank=True, db_column='videoPresentacion', null=True)),
                ('aniosexperiencia', models.IntegerField(blank=True, db_column='aniosExperiencia', null=True)),
                ('fechanacimiento', models.DateField(blank=True, db_column='fechaNacimiento', null=True)),
                ('posibilidadviajar', models.IntegerField(blank=True, db_column='posibilidadViajar', null=True)),
                ('aspirantessolicitados_idaspirantessolicitados', models.ForeignKey(db_column='AspirantesSolicitados_idAspirantesSolicitados', on_delete=django.db.models.deletion.DO_NOTHING, to='Aspirantessolicitados.aspirantessolicitados')),
                ('profesiones_idprofesiones', models.ForeignKey(db_column='Profesiones_idProfesiones', on_delete=django.db.models.deletion.DO_NOTHING, to='Profesiones.profesiones')),
                ('solicitud_idsolicitud', models.ForeignKey(db_column='Solicitud_idSolicitud', on_delete=django.db.models.deletion.DO_NOTHING, to='Solicitud.solicitud')),
            ],
            options={
                'db_table': 'aspirante',
            },
        ),
    ]
