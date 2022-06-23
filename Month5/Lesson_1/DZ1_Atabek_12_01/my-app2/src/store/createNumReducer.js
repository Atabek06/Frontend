import {types} from "../types";
const initialState = {
    num: [],
}

export const createNumReducer = (state = initialState, action) => {
    switch (action.type){
        case types.CREATE_NUM:
            return {...state, num: [...state.num, +action.payload + 10]}
        case types.ADD_NUM:
            return {...state, number: action.payload}
        default:
            return state
    }
}