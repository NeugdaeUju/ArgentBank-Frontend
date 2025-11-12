import {createSlice} from '@reduxjs/toolkit'
import { loginInitialState } from '../initialState';

// Slice avec reducer(s)
const logoutSlice = createSlice({
    name: "logout",
    initialState : {loginInitialState},
    reducers : {
        logout : (state) => {
            state.token = null;
            state.status = "idle";
        }
    },
})

export const {logout} = logoutSlice.actions;
export default logoutSlice.reducer;