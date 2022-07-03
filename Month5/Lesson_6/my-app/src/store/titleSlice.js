import {createSlice} from "@reduxjs/toolkit";



const titleSlice = createSlice({
    name: 'titleslice',
    initialState: {
        title: "old title",
        input: ""
    },
    reducers:{
        changeTitle(state){
            state.title = "new title"
        },
        clearText(state){
            state.title = ''
        },
        inputData(state, action){
            state.input = action.payload
        },
        getTitleFromInput(state, action){
            state.title = action.payload
            state.input = ""
        }
    }
})

export const {
    changeTitle,
    clearText,
    inputData,
    getTitleFromInput
} = titleSlice.actions;

export default titleSlice.reducer