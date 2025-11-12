import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Slices/loginUserSlices'

const store = configureStore({
    reducer : {
        users : userReducer,
    }
})

export default store