# Generated by Django 3.2.7 on 2021-11-11 01:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tipoempresa',
            fields=[
                ('idtipoempresa', models.AutoField(db_column='idtipoEmpresa', primary_key=True, serialize=False)),
                ('descripcion', models.CharField(max_length=45, null=True, unique=True)),
            ],
            options={
                'verbose_name': 'Tipoempresa',
                'verbose_name_plural': 'Tipoempresas',
                'db_table': 'tipoempresa',
            },
        ),
    ]
