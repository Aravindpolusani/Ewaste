# Generated by Django 5.0 on 2024-04-12 17:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0002_regdealer'),
    ]

    operations = [
        migrations.CreateModel(
            name='Highestbid',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_name', models.CharField(max_length=100)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('product_name', models.CharField(max_length=100)),
                ('quantity', models.PositiveIntegerField()),
            ],
        ),
    ]
