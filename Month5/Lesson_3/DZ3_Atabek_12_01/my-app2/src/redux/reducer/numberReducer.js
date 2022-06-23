import { types } from "../../types";


const initialState = {
    numbers: [],
    number: ''
}

export const addNumberReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_NUMBER:
            return { ...state, numbers: [...state.numbers, +action.payload + 10] }
        case types.ADD_NUMBER:
            return { ...state, number: action.payload }
        case types.CLEAR_INPUT_NUMBER:
            return { ...state, number: '' }
        default:
            return state;
    }
}