import { configureStore } from "@reduxjs/toolkit";
import usersListReducer from './usersListSlice'


export default configureStore({
    reducer: {
        usersListReducer
    }
})