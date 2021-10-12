# Generated by Django 3.2.7 on 2021-10-12 14:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Usuario', '0004_auto_20211003_1659'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='usuario',
            options={'verbose_name': 'Usuario', 'verbose_name_plural': 'Usuarios'},
        ),
        migrations.AlterField(
            model_name='usuario',
            name='contrasenia',
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='idusuario',
            field=models.AutoField(db_column='idusuario', primary_key=True, serialize=False),
        ),
    ]