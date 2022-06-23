import {combineReducers} from "redux";
import {titleReducer} from "./titleReducer";
import {inputReducer} from "./inputReducer";
import {userReducer} from "./usersReducer";

export const rootReducer = combineReducers({
    title: titleReducer,
    input: inputReducer,
    users: userReducer,
})