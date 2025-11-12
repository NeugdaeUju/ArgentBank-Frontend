import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './Slices/loginUserSlices'
import logoutReducer from './Slices/logoutUserSlices'

const store = configureStore({
    reducer : {
        login : loginReducer,
        logout: loginReducer,
    }
})

export default store