import {createSlice} from "@reduxjs/toolkit";

const  dataSlice = createSlice({
    name: "dataSlice",
    initialState: {
        data: {
            name: "",
            username: "",
            email: ""
        }
    },
    reducers: {
        addData(state, action){
            state.data[action.payload.name] = action.payload.value
        }
    }
})

export const {addData} = dataSlice.actions;

export default dataSlice.reducer;