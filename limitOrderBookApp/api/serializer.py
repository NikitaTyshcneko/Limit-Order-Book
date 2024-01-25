from rest_framework import serializers

from limitOrderBookApp.models import Stock, Order, Transaction


class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = ['id', 'stock_name', 'stock_short_name', 'price']


class OrderSerializer (serializers.ModelSerializer):
    user = serializers.StringRelatedField()
    stock = serializers.SlugRelatedField(slug_field='stock_short_name', queryset=Stock.objects.all())
    order_status = serializers.ReadOnlyField()
    current_quantity = serializers.ReadOnlyField()

    class Meta:
        model = Order
        fields = ['id', 'user', 'stock', 'order_type', 'order_status', 'price', 'quantity',
                  'current_quantity', 'create_at']


class TransactionSerializer (serializers.ModelSerializer):
    buy_order = serializers.StringRelatedField()
    sell_order = serializers.StringRelatedField()

    class Meta:
        model = Transaction
        fields = '__all__'
