// import {fetchItem} from '../request'


// export function allItem() {
//     return dispatch => {
//         fetchItem()
//         .then (item =>dispatch (
//             {type: "GET_FABRIQUE_SUCCEDED",payload: item})
//         )

//         .catch(err=>dispatch( {
//             type: "GET_FABRIQUE_FAILED",
//             payload: err
//           }))
//     }

// }



import {POST_ITEM ,GET_ITEM, DELETE_ITEM,PUT_ITEM } from "./types"
import * as actionTypes from './types'
 import axios from 'axios'

import {addNewItem,getAllItems, deleteItems,updateItems}   from "/home/mouna/Bureau/Mon Resto/client/src/Component/Action/services.js/api.js"

export const addItemApi=(title, price,imageUrl,description )=> async (dispatch) =>{
    try{
        const res=await addNewItem (title, price,imageUrl,description);
        dispatch ({
            type:POST_ITEM,
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}
//getALL
export const getItemAPI=()=>async (dispatch)=> {
try{
const res=await getAllItems ();
dispatch({
    type:GET_ITEM,
    payload:res.data
})
}
catch (error) {
              console.log(error);
             }
}

export const deleteItem = (id)=> async (dispatch) => {
    try {
      await deleteItems (id);
      dispatch({
        type:DELETE_ITEM,
        payload:id
    })
      console.log("delete")
      dispatch(getItemAPI);
    } catch (error) {
      console.log(error);
    }
  };
// update Menu
export const updateItem = (id,title, price,imageUrl,description ) => async dispatch => {
    try {
      const res = await axios.put(`http://localhost:4003/resto/product/${id}`,{title, price,imageUrl,description }) 
       
      dispatch({
        type: PUT_ITEM, 
        payload: res.data
      });
      console.log("superrr")
    } catch (error) {
      console.log(error);
    }
  };
  export const getProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_ITEM_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/products/${id}`);
  
      dispatch({
        type: actionTypes.GET_ITEM_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_ITEM_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const removeProductDetails = () => (dispatch) => {
    dispatch({ type: actionTypes.GET_ITEM_DETAILS_RESET });
  };