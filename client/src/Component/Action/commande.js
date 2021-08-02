import * as actionTypes from '../Action/typesCommande'
import axios from 'axios'
// import { getState} from '../Reducer/commandeReducer'

export const addToCart = (id, qty)=>async (dispatch, getState)=>{
    const {data}=await axios.get(`/resto/product/${id}`)

dispatch ({
    type : actionTypes.ADD_TO_CART,
    payload:{
        item:data._id,
        title: data.title,
        imageUrl: data.imageUrl,
        price: data.price,
        qty,
    },
});

localStorage.setItem("cart",JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      payload: id,
    });
  
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
  };