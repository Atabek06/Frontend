import {combineReducers} from "redux";
import { addNumberReducer } from "./numberReducer";

export const rootReducer = combineReducers({
     numbers: addNumberReducer
})