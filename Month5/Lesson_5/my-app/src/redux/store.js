import {combineReducers} from "redux";
import {messageReducers} from "./messageReducers";


export const rootReducer = combineReducers({
    message: messageReducers
})