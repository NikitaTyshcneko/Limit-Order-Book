export {
    listAttrs,
    keyToLabel
}

function listAttrs(list) {
    return list?.length ? Object.keys(list[0]) : null;
}

function keyToLabel(key) {
    return labels[key] ?? key.replace(/_+/g, ' ');
}

var labels = {
    'stock_name': 'Name',
    'stock_short_name': 'Code',
    'order_type': 'Type',
    'order_status': 'Status',
    'quantity': 'Qty',
    'current_quantity': 'Curr. qty',
    'create_at': 'Created'
};