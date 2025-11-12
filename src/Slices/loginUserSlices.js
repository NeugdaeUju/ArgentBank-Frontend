import { loginInitialState } from '../initialState'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

// Appel de l'API
export const loginUser = createAsyncThunk(
    "login/loginUser",
    async ({ email, password }, {rejectWithValue}) => {
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify({email, password}),
            });
            if (!response.ok) {
                const errorData= await response.json();
                return rejectWithValue(errorData.message);
            };
            const data = await response.json();
            return data.body;
        } catch(error) {
            return rejectWithValue(error.message);
        };
    }
);


// Slice avec reducer(s)
const loginSlice = createSlice({
    name: "login",
    initialState : loginInitialState,
    reducers : {
        login : (state, action) => {
            state.token = action.payload.token;
            state.status = "successed";
        }
    },
    extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Erreur inconnue";
      });
  },
})

export const {login} = loginSlice.actions;
export default loginSlice.reducer;