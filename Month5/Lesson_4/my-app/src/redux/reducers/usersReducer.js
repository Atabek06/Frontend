import {types} from "../../types";

const initialState = {
    users: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case types.HANDLE_USERS:
            return{...state, users: [...action.payload]}
        default:
            return state
    }
}