import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const getUsers = createAsyncThunk(
    'getUsers',
    async function (id, { rejectWithValue, dispatch }) {
        try {
            const responce = await fetch('https://jsonplaceholder.typicode.com/users')
            if (responce.status === 200) {
                const data = await responce.json()
                return data;
            } else if (responce.status === 404) {
                throw Error('GET REQUEST ERROR')
            }
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const getOneUser = createAsyncThunk(
    'getOneUser',
    async function (id, { rejectWithValue }) {
        try {
            const responce = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            if (responce.status === 200) {
                const data = await responce.json();
                return data
            }
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


// 8дз) сделать пост запрос и через ехтра редусер выводить соответствующее сообщение (ошибка или успех)

export const createUser = createAsyncThunk(
    'createUser',
    async function (id, { rejectWithValue, dispatch }) {

        const data = {
            name: 'Zama',
            username: 'Baiza',
            email: 'baiza@gmail.com'
        }

        const option = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        try {
            const responce = await fetch('https://jsonplaceholder.typicode.com/users', option)

            if (responce.status === 201) {
                return 'ЗАПРОС УСПЕШНО ОБРАБОТАН';
            } else if (responce.status === 404) {
                throw Error('НЕ ВЕРНЫЙ АДРЕС ЗАПРОСА!!!')
            }
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const UsersListSlice = createSlice({
    name: 'UsersListSlice',
    initialState: {
        users: [],
        error: null,
        user: {},
        message: null // dz----
    },
    extraReducers: builder => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
        builder.addCase(getUsers.rejected, (state, action) => {
            state.error = action.payload
        })
        builder.addCase(getOneUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
        builder.addCase(createUser.fulfilled, (state, action) => { // dz...
            state.message = action.payload
        })
        builder.addCase(createUser.rejected, (state, action) => { // dz...
            state.error = action.payload
        })
    }
})

export default UsersListSlice.reducer