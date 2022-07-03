import {configureStore} from "@reduxjs/toolkit";
import titleReducer from './titleSlice'
import usersReducer from "./usersSlice"

export default configureStore({
    reducer:{
        titleReducer: titleReducer,
        usersReducer: usersReducer
    }
})