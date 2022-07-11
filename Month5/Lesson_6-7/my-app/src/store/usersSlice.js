import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "usersSlice",
    initialState: {
        users: [],
        name: ""
    },
    reducers: {
        addUser(state, action){
            state.users = [...state.users, action.payload]
            state.name = ""
        },
        handleName(state, action){
            state.name = action.payload
        },
        clearUsers(state){
            state.users = []
        }
    }
})

export const {addUser, handleName, clearUsers} = usersSlice.actions;

export default usersSlice.reducer