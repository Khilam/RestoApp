import { combineReducers } from "redux";
import {itemReducer} from "./item"
import {getItemDetailsReducer} from "./item"
import {commandeReducer} from '../Reducer/commandeReducer'

export const rootReducer = combineReducers({
    itemReducer,
    commandeReducer,
    getItemDetailsReducer
})