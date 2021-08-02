import * as actionTypes from '../Action/typesCommande'

// const CART_INITIAL_STATE = {
//     cartItems: [],
//   };

  export const cartReducer = (state = {cartItems : []}, action) => {
    switch (action.type) {
      case actionTypes.ADD_TO_CART:
        const item = action.payload;
  
        const existItem = state.cartItems.find((x) => x.datas === item.datas);
  
        if (existItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((x) =>
              x.datas === existItem.datas ? item : x
            ),
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, item],
          };
        }
      case actionTypes.REMOVE_FROM_CART:
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.datas !== action.payload),
        };
      default:
        return state;
    }
  };

