from rest_framework import serializers

from limitOrderBookApp.models import Stock, Order, Transaction


class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = ['id', 'stock_name', 'stock_short_name', 'price']


class OrderSerializer (serializers.ModelSerializer):
    user = serializers.StringRelatedField()
    stock_short_name = serializers.SlugRelatedField(slug_field='stock_short_name', queryset=Stock.objects.all())

    class Meta:
        model = Order
        fields = ['id', 'user', 'stock_short_name', 'order_type', 'price', 'quantity', 'create_at']


class TransactionSerializer (serializers.ModelSerializer):
    order = serializers.StringRelatedField()

    class Meta:
        model = Transaction
        fields = '__all__'

