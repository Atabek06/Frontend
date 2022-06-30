import {types} from "../types";


export const massageTrue = (data) => {
    return {
        type: types.MESSAGE_TRUE,
        payload: data
    }
}

export const massageFalse = () => {
    return {
        type: types.MESSAGE_FALSE
    }
}

export const createUserAction = (data) => {
    return async function (dispatch) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/users',options);

        if(response.status === 404) {
            dispatch(massageTrue({text: "не создано", button: "danger"}))
        }
        else {
            dispatch(massageTrue({text: "создано", button: "success"}))
        } if (data.name === '') {
            console.log('NAME: пустое')
            dispatch(massageTrue({text: 'ИМЯ: поле пустое', button: 'danger'}))
        } if (data.lastName === '') {
            console.log('LASTNAME: пустое')
            dispatch(massageTrue({text: 'ФАМИЛИЯ: поле пустое', button: 'danger'}))
        } if (data.age === 0) {
            console.log('AGE: пустое')
            dispatch(massageTrue({text: 'ВОЗРАСТ: поле пустое', button: 'danger'}))
        } if (data.email === '') {
            console.log('Email: пустое')
            dispatch(massageTrue({text: 'EMAIL: поле пустое', button: 'danger'}))
        } if (data.name, data.lastName, data.age, data.email === ''){
            console.log('заполните поля')
            dispatch(massageTrue({text: 'заполните поля', button: 'danger'}))
        }
    }
}