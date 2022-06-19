import {types} from "../types";

const initialState = {
    title: ""
}

export const titleReducer = (state = initialState, action) => {
    switch (action.type){
        case types.SAY_HELLO:
            return{...state, title: action.payload} //настоящая разработка
        default:
            return state
    }
    // if (action.type === "SAY_HELLO"){
    //     return{
    //         ...state, title: "Hello world"
    //     }
    // }
    // return state
}