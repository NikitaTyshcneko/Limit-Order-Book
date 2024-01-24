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
      case 'SET_TRANSACTIONS':
        return {
            ...state,
            orders: action.payload,
        };
    default:
      return state;
  }
}