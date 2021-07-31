// import * as actionTypes from '../Action/typesCommande'
// import axios from 'axios'
// import { getItemAPI } from './item'

// export const addToCart = (id, qty)=>async (dispatch, getItemAPI)=>{
//     const {data}=await axios.get(`/resto/product/${id}`)

// dispatch ({
//     type : actionTypes.ADD_TO_CART,
//     payload:{
//         product:data._id,
//         title: data.title,
//         imageUrl: data.imageUrl,
//         price: data.price,
//         qty
//     }
// })
// }
// localStorage.setItem('cart',JSON.stringify(getItemAPI().cart.cartItems));

// export const removeFromCart = (id) => (dispatch, getItemAPI) => {
//     dispatch({
//       type: actionTypes.REMOVE_FROM_CART,
//       payload: id,
//     });
  
//     localStorage.setItem("cart", JSON.stringify(getItemAPI().cart.cartItems));
//   };