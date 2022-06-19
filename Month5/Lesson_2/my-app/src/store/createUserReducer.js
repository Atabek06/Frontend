import {types} from "../types";

const initialState = {
    users: [0],
    name: ""
}

export const createUserReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type){
        case types.CREATE_USER:
            return {...state, users: [...state.users, action.payload ]}
        case types.ADD_NAME:
            return {...state, name: action.payload}
        default:
            return state
    }
}