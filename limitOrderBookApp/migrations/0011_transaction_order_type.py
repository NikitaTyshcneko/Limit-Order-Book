# Generated by Django 5.0.1 on 2024-01-20 21:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('limitOrderBookApp', '0010_remove_transaction_buy_order_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction',
            name='order_type',
            field=models.CharField(default='', max_length=4),
        ),
    ]