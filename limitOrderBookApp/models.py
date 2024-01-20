from django.contrib.auth.models import User
from django.db import models


class Stock(models.Model):
    stock_name = models.CharField(max_length=20, null=False)
    stock_short_name = models.CharField(max_length=4, default='')
    price = models.DecimalField(decimal_places=2,max_digits=10, null=False)
    # last_price = models.DecimalField()
    # highest_price = models.DecimalField()

    def __str__(self):
        return f'{self.stock_name}'


class Order(models.Model):
    ORDER_CHOICES = [
        ('buy', 'Buy'),
        ('sell', 'Sell'),
    ]

    user = models.ForeignKey(User, null=False, on_delete=models.CASCADE)
    stock_short_name = models.ForeignKey(Stock, null=False, on_delete=models.CASCADE)
    order_type = models.CharField(max_length=4, null=False, choices=ORDER_CHOICES)
    price = models.DecimalField(decimal_places=2, max_digits=10, null=False)
    quantity = models.IntegerField(null=False)
    create_at = models.DateTimeField(auto_now_add=True, null=False)

    def __str__(self):
        return f'{self.user} - {self.stock_short_name} - {self.order_type}'


class Transaction(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    total_price = models.DecimalField(decimal_places=2, max_digits=10, null=False)
    quantity = models.IntegerField(null=False)
    create_at = models.DateTimeField(auto_now_add=True, null=False)

    def __str__(self):
        return f'{self.order.pk} - {self.total_price }'
