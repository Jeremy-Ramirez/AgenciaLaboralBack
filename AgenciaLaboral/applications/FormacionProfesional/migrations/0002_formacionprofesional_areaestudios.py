# Generated by Django 3.2.7 on 2021-12-01 21:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FormacionProfesional', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='formacionprofesional',
            name='areaestudios',
            field=models.CharField(blank=True, db_column='areaEstudios', max_length=100, null=True),
        ),
    ]
