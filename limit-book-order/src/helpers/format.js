export {
    listAttrs,
    keyToLabel,
    formatRender
}

function listAttrs(list) {
    return list?.length ? Object.keys(list[0]) : null;
}

function keyToLabel(key) {
    return labels[key] ?? key.replace(/_+/g, ' ');
}

function formatRender(value, key) {
    const timestampKeys = ['create_at'];
    const valueIsIimestamp = timestampKeys.includes(key);

    return valueIsIimestamp ? formatTimestamp(value) : value;
}

function formatTimestamp(timestamp) {
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
    };

    return (new Date(timestamp)).toLocaleString(undefined, options);
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