# Generated by Django 4.0.3 on 2022-10-26 23:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0008_serviceappointment_appointment_time_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Status',
            fields=[
                ('id', models.PositiveSmallIntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(default='Submitted', max_length=100, unique=True)),
            ],
        ),
    ]
