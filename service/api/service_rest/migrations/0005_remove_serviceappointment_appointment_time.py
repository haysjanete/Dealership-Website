# Generated by Django 4.0.3 on 2022-10-26 16:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0004_serviceappointment_appointment_time'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='serviceappointment',
            name='appointment_time',
        ),
    ]