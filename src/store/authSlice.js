// this file is a reducer slice for authentication of users when they sign in
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

//asynchronous api call that names the action and creates a promise call to the API. Here we are logging in/signing up a user
export const signup = createAsyncThunk('auth/signup', async({username, password, profile}, thunkAPI) =>{
    try {
        const res = await axios.post('http://localhost:8080/signup', {username, password, profile})
        return res.data
    } catch (err) {
        console.log(err)
        return thunkAPI.rejectWithValue(err.message)
    }
});

// handling users signing in, similar to sign ups
export const signin = createAsyncThunk('auth/signin', async({username, password}, thunkAPI) =>{
    try {
        const res = await axios.post('http://localhost:8080/signin', {username, password})
        return res.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data)
    }
});

// default state of users coming to the site. They are not logged in, and therefore will not have a name for now.
const initialState ={
    user: '',
    profile:'',
    isLoggedIn: false,
    loading: false,
    error: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    // this reducer handles users logging out
    reducers:{
        logout: (state, action) => {
            state.user = ''
            state.profile = ''
            state.isLoggedIn = false
            state.loading = false
            state.error = null
        }
    },
    extraReducers: (builder) => {
        // assigning actions this reducer can handle
        builder
            // successful signup case
            .addCase(signup.fulfilled, (state, action) => {
                state.user = action.payload.username
                state.profile = action.payload.profile
                state.isLoggedIn = true
                state.loading = false
                state.error = null
            })
            
            // signup in process case
            .addCase(signup.pending, (state, action) => {
                state.loading = true
            })

            // signup rejected case
            .addCase(signup.rejected, (state, action) => {
                state.loading = false
                state.isLoggedIn = false
                state.error = action.payload
            })

            // successful signin case
            .addCase(signin.fulfilled, (state, action) => {
                state.user = action.payload.username
                state.isLoggedIn = true
                state.loading = false
                state.error = null
            })
            
            // signin in process case
            .addCase(signin.pending, (state, action) => {
                state.loading = true
            })

            // signin rejected case
            .addCase(signin.rejected, (state, action) => {
                state.loading = false
                state.isLoggedIn = false
                state.error = action.payload
            })
    }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

