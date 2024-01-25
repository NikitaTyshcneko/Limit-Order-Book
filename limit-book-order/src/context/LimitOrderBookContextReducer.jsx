export const limitOrderBookReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_LIMIT_ORDER_BOOK':
            return {
                ...state,
                limitOrderBook: action.payload,
            };
        case 'LOGIN':
            return {
                ...state,
                isLogin: action.payload,
            };
        case 'SET_STOCKS':
            return {
                ...state,
                stocks: action.payload,
            };
        case 'SET_ORDERS':
            return {
                ...state,
                orders: action.payload,
            };
        case 'ADD_ORDER':
            state.orders.push(action.payload);

            return {
                ...state,
                orders: state.orders,
            };
        case 'SET_TRANSACTIONS':
            return {
                ...state,
                transactions: action.payload,
            };
        default:
            return state;
    }
}