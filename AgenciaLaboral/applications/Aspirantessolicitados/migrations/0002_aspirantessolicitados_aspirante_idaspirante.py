# Generated by Django 3.2.6 on 2021-10-05 17:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Aspirante', '0005_alter_aspirante_idaspirante'),
        ('Aspirantessolicitados', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='aspirantessolicitados',
            name='aspirante_idaspirante',
            field=models.ForeignKey(db_column='Aspirante_idaspirante', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='Aspirante.aspirante'),
        ),
    ]
