import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

/* Appel API */
export const loginUser = createAsyncThunk(
    "user/loginUser",
    async ( { email , password }) => {
        const res = await fetch('http://localhost:3001', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({email , password}),
        })

        if (!res.ok) throw new Error('Erreur de connxion')
        const data = await res.json()
        return data
    }
)

/* Initial State */
const initialState = {
    users : [
        {
            id: 1,
            firstname: `Tony`,
            lastname: `Stark`,
            email: `tony@stark.com`,
            password: `password123`
        },
        {
            id: 2,
            firstname: `Steve`,
            lastname: `Rogers`,
            email: `steve@rogers.com`,
            password: `password456`
        }
    ],
    currentUser: null,
    error: null,
    status: 'idle',
}

/* Reducer(s) */
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers : {
        loginLocal: (state, action) => {
            const { email, password} = action.payload
            const user = state.users.find(
                (u) =>
                    u.email === action.payload.email &&
                    u.password === action.payload.password
            )
            if (user) {
                state.currentUser = user
                state.error = null
            } else {
                state.error = 'Identifiant incorrect'
            }
        },
        logout: (state) => {
            state.currentUser = null
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginUser.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.currentUser = action.payload
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    },
})

export const { loginLocal, logout} = userSlice.actions
export default  userSlice.reducer