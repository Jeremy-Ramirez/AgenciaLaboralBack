# Generated by Django 3.2.7 on 2021-10-12 17:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Usuario', '0012_rename_password_usuario_contrasenia'),
    ]

    operations = [
        migrations.RenameField(
            model_name='usuario',
            old_name='contrasenia',
            new_name='password',
        ),
    ]
