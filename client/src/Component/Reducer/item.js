import {POST_ITEM,GET_ITEM, DELETE_ITEM, PUT_ITEM} from "../Action/types"
import * as actionTypes from '../Action/types'
const initialState={
  datas : [],
  loading:true
} 

 export const itemReducer = ( state = { datas: [] }, action) => {
  const { type, payload } = action;
  switch (type){
    case GET_ITEM:
      
      return {
        ...state,
        datas: payload,
        loading: false
      };

    case POST_ITEM:
     return {
      ...state,
      datas: [...state.datas, payload]

     
    }
    case DELETE_ITEM:
     return {
       ...state,
       datas: state.datas.filter(
         data => data._id !== payload
       ),
       loading: false
     };
     case PUT_ITEM:
       return {
         ...state,
         datas: state.datas.map(data =>
           data._id === payload._id ? payload : data
         )
       };
 }
  return state
};


// const INITIAL_STATE={
//   datas : [],
//   loading:true
// } 
export const getItemDetailsReducer = (state={datas:{}},action)=>{
  const { type, payload } = action;

  switch(action.type){
    case actionTypes.GET_ITEM_DETAILS_REQUEST:
      return{
        loading: true,
        product: action.payload
      };
      case actionTypes.GET_ITEM_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
      case actionTypes.GET_ITEM_DETAILS_FAIL:
        return {
        
          loading: false,
          error: action.payload,
        };
        case actionTypes.GET_ITEM_DETAILS_RESET:
          return{
            product:{},
          };
          default:
            return state;
          

  }
};
