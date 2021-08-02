import { combineReducers } from "redux";
import {itemReducer} from "./item"
import {getItemDetailsReducer} from "./item"
import {cartReducer} from '../Reducer/commandeReducer'

 

export const rootReducer = combineReducers({
    itemReducer,
    cartReducer,
    getItemDetailsReducer,
   
   

   
    
})