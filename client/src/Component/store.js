// import { createStore ,applyMiddleware} from "redux";
// import {itemReducer} from "./Reducer/item";
// import thunk from "redux-thunk"
// import { combineReducers } from "redux";


// const Reducers = combineReducers({

//   itemstore: itemReducer


// });

// const store = createStore(Reducers,applyMiddleware(thunk));
// export default store;


import { createStore, combineReducers, applyMiddleware,compose } from "redux";
import { rootReducer } from "./Reducer/index";
import thunk from "redux-thunk";
// import {composeWithDevTools} from "redux-devtools-extension"
//Reducers

import {commandeReducer} from './Reducer/commandeReducer'
import {getItemDetailsReducer, itemReducer} from './Reducer/item'

const reducer = combineReducers({
  commande: commandeReducer,
  getItemDetails:getItemDetailsReducer,
  item:itemReducer
});


const middleWare = [thunk];

// const cartItemsInLocalStorage = localStorage.getItemAPI("cart")
//   ? JSON.parse(localStorage.getItemAPI("cart"))
//   : [];

// const INITIAL_STATE = {
//   cart: {
//     cartItems: cartItemsInLocalStorage,
//   },
// };
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWare))
);


export default store;