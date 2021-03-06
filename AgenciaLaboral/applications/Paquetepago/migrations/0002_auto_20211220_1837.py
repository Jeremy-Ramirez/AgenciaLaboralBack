# Generated by Django 3.2.7 on 2021-12-20 18:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Paquetepago', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paquetepago',
            name='duracion',
            field=models.DurationField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='paquetepago',
            name='fechacaducidad',
            field=models.DateField(blank=True, db_column='fechaCaducidad', null=True),
        ),
        migrations.AlterField(
            model_name='paquetepago',
            name='fecharegistro',
            field=models.DateField(blank=True, db_column='fechaRegistro', null=True),
        ),
        migrations.AlterField(
            model_name='paquetepago',
            name='idpaquetepago',
            field=models.AutoField(db_column='idPaquetePago', primary_key=True, serialize=False),
        ),
    ]
