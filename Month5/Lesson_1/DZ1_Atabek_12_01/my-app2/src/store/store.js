import {combineReducers} from "redux";
import {createNumReducer} from "./createNumReducer";

export const rootReducer = combineReducers({
    num: createNumReducer
})