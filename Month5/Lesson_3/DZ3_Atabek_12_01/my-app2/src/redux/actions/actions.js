import {types} from "../../types";

export const createNumberAction = (number) => {
    return {
        type: types.CREATE_NUMBER,
        payload: number
    }
}
export const addNumberAction = (sum) => {
    return {
        type: types.ADD_NUMBER,
        payload: sum
    }
}
export const clearInputNumberAction = (number) => {
    return {
        type: types.CLEAR_INPUT_NUMBER,
        payload: number
    }
}