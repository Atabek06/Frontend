import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


export const getPost = createAsyncThunk(
    "getPost",
    async function (data, { dispatch }) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()
        dispatch(getPostsAction(posts));
    }
)



export const getPostById = createAsyncThunk(
    'getPostById',
    async function (data, { dispatch }) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${+data}`)
        const post = await response.json()
        dispatch(getPostByIdAction(post));
    }
)

export const createUser = createAsyncThunk(
    "createUser",
    async function (form){
        const option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        }

        const response = await fetch("https://jsonplaceholder.typicode.com/users", option);

        if (response.status === 404){
            alert("error")
        }if (response.status === 201){
            alert("success")
        }
    }
    )

export const getPosts = createAsyncThunk(
    'getPosts',
    async function (data,{ dispatch}) {
        const response = await fetch("`https://jsonplaceholder.typicode.com/posts`")
        const posts = await response.json();
        dispatch(getPostsAction(posts));
    }
)


const fetchSlice = createSlice({
    name: "fetchSlice",
    initialState: {
        posts: [],
        post: {
            title: "",
            body: ""
        }
    },
    reducers: {
        getPostsAction(state, action){
            state.posts = action.payload
        },
        getPostByIdAction(state, action) {
            state.post = action.payload
        }
    }
})

export const {getPostsAction, getPostByIdAction} = fetchSlice.actions;
export default fetchSlice.reducer;