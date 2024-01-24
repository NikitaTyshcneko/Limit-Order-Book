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
    default:
      return state;
  }
}