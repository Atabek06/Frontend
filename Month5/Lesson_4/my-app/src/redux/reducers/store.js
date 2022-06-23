import {combineReducers} from "redux";
import {titleReducer} from "./titleReducer";
import {usersReducer} from "./usersReducer";


export const rootReducers = combineReducers({
    titleReducer: titleReducer,
    usersReducer: usersReducer
})