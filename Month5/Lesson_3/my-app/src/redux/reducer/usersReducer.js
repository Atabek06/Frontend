import {types} from "../../types";

const initialState = {
    users: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_USER:
            return {...state, users: [...state.users, action.payload]}

        default:
            return state
    }
}