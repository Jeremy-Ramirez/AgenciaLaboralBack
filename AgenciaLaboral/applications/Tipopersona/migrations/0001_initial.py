# Generated by Django 3.2.7 on 2021-12-16 01:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tipopersona',
            fields=[
                ('idtipopersona', models.IntegerField(db_column='idtipoPersona', primary_key=True, serialize=False)),
                ('descripcion', models.CharField(max_length=45, null=True, unique=True)),
            ],
            options={
                'verbose_name': 'Tipopersona',
                'verbose_name_plural': 'Tipopersonas',
                'db_table': 'tipopersona',
            },
        ),
    ]
