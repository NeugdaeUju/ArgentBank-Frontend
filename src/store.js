import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './Slices/loginUserSlices'

const store = configureStore({
    reducer : {
        login : loginReducer,
    }
})

export default store