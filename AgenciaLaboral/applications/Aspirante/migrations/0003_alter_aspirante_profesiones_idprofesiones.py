# Generated by Django 3.2.7 on 2021-11-04 20:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Profesiones', '0001_initial'),
        ('Aspirante', '0002_alter_aspirante_posibilidadviajar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='aspirante',
            name='profesiones_idprofesiones',
            field=models.ForeignKey(db_column='Profesiones_idProfesiones', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='Profesiones.profesiones'),
        ),
    ]
