# Generated by Django 3.2.6 on 2021-08-26 07:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Factura', '0001_initial'),
        ('Paquetepago', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Detallefactura',
            fields=[
                ('paquetepago_idpaquetepago', models.OneToOneField(db_column='PaquetePago_idPaquetePago', on_delete=django.db.models.deletion.DO_NOTHING, primary_key=True, serialize=False, to='Paquetepago.paquetepago')),
                ('iddetallefactura', models.IntegerField(db_column='idDetalleFactura')),
                ('cantidad', models.IntegerField(blank=True, null=True)),
                ('preciounitario', models.FloatField(blank=True, db_column='precioUnitario', null=True)),
                ('totaldetalle', models.FloatField(blank=True, db_column='totalDetalle', null=True)),
                ('factura_idfactura', models.ForeignKey(db_column='Factura_idFactura', on_delete=django.db.models.deletion.DO_NOTHING, to='Factura.factura')),
            ],
            options={
                'db_table': 'detallefactura',
                'unique_together': {('paquetepago_idpaquetepago', 'factura_idfactura', 'iddetallefactura')},
            },
        ),
    ]
