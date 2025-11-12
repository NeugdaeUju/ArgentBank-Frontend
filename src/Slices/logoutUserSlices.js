import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    token : null,
}

// Slice avec reducer(s)
const logoutSlice = createSlice({
    name: "logout",
    initialState,
    reducers : {
        logout : (state) => {
            state.token = null;
        }
    },
})

export const {logout} = logoutSlice.actions;
export default logoutSlice.reducer;