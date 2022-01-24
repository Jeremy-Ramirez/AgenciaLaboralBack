# Generated by Django 3.2.7 on 2021-12-27 22:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DuracionPaquetes',
            fields=[
                ('idduracionpaquetes', models.AutoField(db_column='idDuracionPaquetes', primary_key=True, serialize=False)),
                ('duracion', models.DurationField(blank=True, null=True)),
                ('descripcion', models.CharField(blank=True, max_length=1000, null=True)),
            ],
            options={
                'db_table': 'duracionpaquetes',
            },
        ),
    ]