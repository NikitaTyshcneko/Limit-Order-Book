# Generated by Django 5.0.1 on 2024-01-20 15:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('limitOrderBookApp', '0002_stock_stock_short_name_alter_stock_stock_name'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Transactions',
            new_name='Transaction',
        ),
        migrations.RenameField(
            model_name='order',
            old_name='stock_name',
            new_name='stock_short_name',
        ),
    ]