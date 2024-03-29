# Generated by Django 5.0.1 on 2024-01-20 21:30

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('limitOrderBookApp', '0009_rename_stock_short_name_order_stock_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='transaction',
            name='buy_order',
        ),
        migrations.RemoveField(
            model_name='transaction',
            name='sell_order',
        ),
        migrations.RemoveField(
            model_name='transaction',
            name='stock_short_name',
        ),
        migrations.AddField(
            model_name='transaction',
            name='order',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='limitOrderBookApp.order'),
        ),
    ]
