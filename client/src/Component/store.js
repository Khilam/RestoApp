

import { createStore, combineReducers, applyMiddleware,compose } from "redux";
import { rootReducer } from "./Reducer/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import {composeWithDevTools} from "redux-devtools-extension"
//Reducers

import {cartReducer} from './Reducer/commandeReducer'
import {getItemDetailsReducer, itemReducer} from './Reducer/item'

const reducer = combineReducers({
  cart: cartReducer,
  getItemDetails:getItemDetailsReducer,
  item:itemReducer,

 
});


const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cartReducer")
  ? JSON.parse(localStorage.getItem("cartReducer"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
 
};

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);




// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(
//   rootReducer,
//   INITIAL_STATE,
//   composeEnhancers(applyMiddleware(...middleware))
// );


export default store;


// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { itemReducer } from "./Reducer/item";
// // Reducers
// import { cartReducer } from "./Reducer/commandeReducer";
// import {
//   getProductsReducer,
//   getProductDetailsReducer,
// } from "./Reducer/commandeReducer";

// const reducer = combineReducers({
//   cart: cartReducer,
//   getProducts: getProductsReducer,
//   getProductDetails: getProductDetailsReducer,
//   item: itemReducer
// });

// const middleware = [thunk];

// const cartItemsInLocalStorage = localStorage.getItem("cart")
//   ? JSON.parse(localStorage.getItem("cart"))
//   : [];

// const INITIAL_STATE = {
//   cart: {
//     cartItems: cartItemsInLocalStorage,
//   },
// };

// const store = createStore(
//   reducer,
  
  
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;
