# Generated by Django 3.2.7 on 2021-10-29 20:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Sugerencia', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sugerencia',
            name='descripcion',
            field=models.CharField(blank=True, max_length=600, null=True),
        ),
    ]