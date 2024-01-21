from django.db.models import QuerySet
from limitOrderBookApp.models import Order, Transaction


def match_order(order: Order):
    order_type = 'sell' if order.order_type == 'buy' else 'buy'
    matching_orders = Order.objects.exclude(user=order.user).filter(order_type=order_type, order_status='open',
                                                                    price=order.price).order_by('create_at')
    order.current_quantity = order.quantity

    if len(matching_orders) == 0:
        order.order_status = 'open'
        order.save()

    connect_order_with_matching_orders(order, matching_orders, order_type)


def connect_order_with_matching_orders(order: Order, matching_orders: QuerySet, order_type: str):
    for matching_order in matching_orders:
        if order_type == 'buy' and order.current_quantity <= matching_order.current_quantity:
            create_transaction(order, matching_order, order.current_quantity)
            break
        elif order_type == 'sell' and order.current_quantity <= matching_order.current_quantity:
            create_transaction(matching_order, order, order.current_quantity)
            break
        elif order_type == 'buy' and order.current_quantity > matching_order.current_quantity:
            create_transaction(order, matching_order, matching_order.current_quantity)
        elif order_type == 'sell' and order.current_quantity > matching_order.current_quantity:
            create_transaction(matching_order, order, matching_order.current_quantity)


def create_transaction(buy_order: Order, sell_order: Order, quantity: int):
    total_price = sell_order.price * quantity

    Transaction.objects.create(
        buy_order=buy_order,
        sell_order=sell_order,
        total_price=total_price,
        quantity=quantity,
    )

    buy_order.current_quantity -= quantity
    buy_order.save()
    sell_order.current_quantity -= quantity
    sell_order.save()

    change_order_status(buy_order)
    change_order_status(sell_order)


def change_order_status(order):
    if order.current_quantity > 0:
        order.order_status = 'open'
        order.save()
    else:
        order.order_status = 'close'
        order.save()
