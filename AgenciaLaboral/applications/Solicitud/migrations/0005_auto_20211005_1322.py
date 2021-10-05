# Generated by Django 3.2.6 on 2021-10-05 18:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Representanteempresa', '0002_alter_representanteempresa_idrepresentanteempresa'),
        ('Solicitud', '0004_auto_20211005_1215'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='solicitud',
            name='representante_idempresa',
        ),
        migrations.AddField(
            model_name='solicitud',
            name='representante_idrepresentante',
            field=models.ForeignKey(db_column='representante_idrepresentante', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='Representanteempresa.representanteempresa'),
        ),
    ]
