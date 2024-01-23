# Generated by Django 5.0.1 on 2024-01-20 21:09

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('limitOrderBookApp', '0007_alter_transaction_stock_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='transaction',
            name='stock_name',
        ),
        migrations.AddField(
            model_name='transaction',
            name='stock_short_name',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='limitOrderBookApp.order'),
        ),
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