import {configureStore} from "@reduxjs/toolkit";
import titleReducer from './titleSlice';
import usersReducer from "./usersSlice";
import dataReducer from "./dataSlice";
import fetchReducer from "./fetchSlice"

export default configureStore({
    reducer:{
        titleReducer: titleReducer,
        usersReducer: usersReducer,
        dataReducer: dataReducer,
        fetchReducer: fetchReducer
    }
})