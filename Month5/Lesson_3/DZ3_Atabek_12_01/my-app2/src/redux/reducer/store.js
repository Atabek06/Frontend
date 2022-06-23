import { combineReducers } from "redux";
import { inputReducer } from "./inputReducer";
import { addNumberReducer } from "./createNumberReducer";


export const rootReducer = combineReducers({
    input: inputReducer,
    numbers: addNumberReducer
})