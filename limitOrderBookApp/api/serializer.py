from rest_framework import serializers

from limitOrderBookApp.models import Stock, Order, Transactions


class StockSerializer (serializers.ModelSerializer):
    class Meta:
        model = Stock
        field = ['id', 'stock_name', 'stock_short_name', 'price']


class OrderSerializer (serializers.ModelSerializer):
    user = serializers.StringRelatedField()
    stock_short_name = serializers.StringRelatedField()

    class Meta:
        model = Order
        field = ['id', 'user', 'stock_short_name', 'order_type', 'price', 'quantity', 'create_at']


class TransactionSerializer (serializers.ModelSerializer):
    order = serializers.StringRelatedField()

    class Meta:
        model = Transactions
        field = ['id', 'order', 'total_price', 'quantity', 'create_at']

