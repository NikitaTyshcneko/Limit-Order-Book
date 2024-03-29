# Generated by Django 5.0.1 on 2024-01-20 20:08

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('limitOrderBookApp', '0004_remove_transaction_order_transaction_buy_order_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='buy_order',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='buy_transactions', to='limitOrderBookApp.order'),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='sell_order',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sell_transactions', to='limitOrderBookApp.order'),
        ),
    ]
