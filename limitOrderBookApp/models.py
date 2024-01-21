from django.contrib.auth.models import User
from django.db import models


class Stock(models.Model):
    stock_name = models.CharField(max_length=20, null=False)
    stock_short_name = models.CharField(max_length=4, default='')
    price = models.DecimalField(decimal_places=2, max_digits=10, null=False)

    def __str__(self):
        return f'{self.stock_name}'


class Order(models.Model):
    ORDER_TYPE = [
        ('buy', 'Buy'),
        ('sell', 'Sell'),
    ]

    ORDER_STATUS = [
        ('open', 'Open'),
        ('close', 'Close'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    stock = models.ForeignKey(Stock, null=False, on_delete=models.CASCADE)
    order_type = models.CharField(max_length=4, null=False, choices=ORDER_TYPE)
    order_status = models.CharField(max_length=5, null=False, choices=ORDER_STATUS)
    price = models.DecimalField(decimal_places=2, max_digits=10, null=False)
    quantity = models.IntegerField(null=False)
    current_quantity = models.IntegerField(default=0)
    create_at = models.DateTimeField(auto_now_add=True, null=False)

    def __str__(self):
        return f'{self.user}'


class Transaction(models.Model):
    buy_order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='buy_order')
    sell_order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='sell_order')
    total_price = models.DecimalField(decimal_places=2, max_digits=10, null=False)
    quantity = models.IntegerField(null=False)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.buy_order.user} - {self.total_price}'
