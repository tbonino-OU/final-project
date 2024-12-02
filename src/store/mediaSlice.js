// this file is a reducer slice for individual pieces of media.
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

export const cardDataFetch = createAsyncThunk('media/cardDataFetch', async({id, name, type, genre, relDate, physRel, description}, thunkAPI) => {
    try{
        const res = await axios.get('http://localhost:8080/media')
    } catch(err) {
        console.log(err)
        return thunkAPI.rejectWithValue(err.message)
    }
})

const initialState = {
    id: '',
    name: '',
    type: '',
    genre: '',
    relDate: '',
    physRel: '',
    description: '',
    error: null
}

export const mediaSlice = createSlice({
    name: 'media',
    initialState,
    reducers: {}
})

export default mediaSlice.reducer;

