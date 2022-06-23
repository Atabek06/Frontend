
import { types } from "../../types";


const initialState = {
    numbers: [],
}

export const addNumberReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_NUMBER:
            return { ...state, numbers: [...state.numbers, +action.payload + 10] }

        default:
            return state;
    }
}