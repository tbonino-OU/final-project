// this file is a reducer slice for individual pieces of media.
import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

const initialState = {
    name: '',
    type: '',
    genre: '',
    relDate: '',
    physRel: '',
    description: ''
}