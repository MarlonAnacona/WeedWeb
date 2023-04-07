# Generated by Django 4.1.7 on 2023-04-07 01:05

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('seeds', '0002_alter_seeds_cbd_alter_seeds_description_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Farm',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('farm_name', models.CharField(max_length=64)),
                ('longitude', models.DecimalField(decimal_places=6, max_digits=9)),
                ('latitude', models.DecimalField(decimal_places=6, max_digits=9)),
                ('date_creation_farm', models.DateField(default=datetime.date.today)),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Parcel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('width', models.DecimalField(decimal_places=2, max_digits=5, null=True)),
                ('length', models.DecimalField(decimal_places=2, max_digits=5, null=True)),
                ('crop_modality', models.CharField(choices=[('Outdoor', 'Outdoor'), ('Indoor', 'Indoor')], default=None, max_length=30)),
                ('date_creation_parcel', models.DateField(default=django.utils.timezone.now)),
                ('farm_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='farms.farm')),
                ('seed_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='seeds.seeds')),
            ],
        ),
    ]