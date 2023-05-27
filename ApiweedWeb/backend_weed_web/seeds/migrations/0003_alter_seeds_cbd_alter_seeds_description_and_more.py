from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('seeds', '0002_alter_seeds_cbd_alter_seeds_description_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='seeds',
            name='cbd',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='seeds',
            name='description',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='seeds',
            name='thc',
            field=models.FloatField(),
        ),
    ]
