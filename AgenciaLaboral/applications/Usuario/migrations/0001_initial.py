# Generated by Django 3.2.7 on 2021-12-16 01:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Estadocivil', '0001_initial'),
        ('Provincia', '0001_initial'),
        ('Ciudad', '0001_initial'),
        ('Estado', '0001_initial'),
        ('Rol', '0001_initial'),
        ('Tipodocumento', '0001_initial'),
        ('Genero', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('idusuario', models.AutoField(db_column='idusuario', primary_key=True, serialize=False)),
                ('nombreusuario', models.CharField(blank=True, db_column='nombreUsuario', max_length=45, null=True)),
                ('contrasenia', models.CharField(blank=True, max_length=150, null=True)),
                ('nodocumento', models.CharField(blank=True, max_length=45, null=True, unique=True)),
                ('nombre', models.CharField(blank=True, max_length=45, null=True)),
                ('apellido', models.CharField(blank=True, max_length=45, null=True)),
                ('correo', models.CharField(blank=True, max_length=45, null=True, unique=True)),
                ('telefono', models.CharField(blank=True, max_length=45, null=True)),
                ('direccion', models.CharField(blank=True, max_length=45, null=True)),
                ('ciudad_idciudad', models.ForeignKey(db_column='Ciudad_idCiudad', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='Ciudad.ciudad')),
                ('estado_idestado', models.ForeignKey(db_column='estado_idestado', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='Estado.estado')),
                ('estadocivil_idestadocivil', models.ForeignKey(db_column='EstadoCivil_idEstadoCivil', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='Estadocivil.estadocivil')),
                ('genero_idgenero', models.ForeignKey(db_column='Genero_idGenero', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='Genero.genero')),
                ('provincia_idprovincia', models.ForeignKey(db_column='Provincia_idProvincia', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='Provincia.provincia')),
                ('rol_idrol', models.ForeignKey(db_column='Rol_idRol', on_delete=django.db.models.deletion.DO_NOTHING, to='Rol.rol')),
                ('tipodocumento_idtipodocumento', models.ForeignKey(db_column='tipodocumento_idtipodocumento', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='Tipodocumento.tipodocumento')),
            ],
            options={
                'verbose_name': 'Usuario',
                'verbose_name_plural': 'Usuarios',
                'db_table': 'usuario',
            },
        ),
    ]
