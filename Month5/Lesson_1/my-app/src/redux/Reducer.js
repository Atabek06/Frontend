const initialState = {
    users: []
}

export const reducer = (state= {title: "", users: []}, action) => {

    if (action.type === "CHANGE_TITLE"){
        return{
            ...state, title: " I am new title"
        }
    } else if(action.type === "CLEAR_TITLE") {
        return {
            ...state, title: ""
        }
    } else if (action.type === "ADD_USER"){
        console.log(action)
        return{
            ...state, users: [...state.users, action.payload]
        }
    } else {
        return state
    }
}