import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// Appel API pour obtenir les data du user
export const userProfile = createAsyncThunk(
    'user/userProfile',
    async( token, {rejectWithValue}) => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: "GET",
                headers: {
                    "Authorization" : `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                
            });
            if (!response.ok) {
                const errorData = await response.json();
                return rejectWithValue(errorData.message);
            }
            const data = await response.json()
            // console.log('Data fetch:', data); // <--- log des données reçues
            // console.log(data.body.userName)
            return data.body;
        } catch (error) {
            return rejectWithValue(error.message);
        }
        
    }
)

// Intial State
const initialState = {
    info: null,
    status: "idle",
    error: null
}

// Slice avec Reducer(s)
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers : {
        clearUser: (state) => {
            state.info = null;
            state.status = "idle";
            state.error = null;
        }
    },
     extraReducers: (builder) => {
    builder
      .addCase(userProfile.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(userProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.info = action.payload; // <-- ici on stocke les infos de l'utilisateur
      })
      .addCase(userProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Erreur inconnue';
      });
  },
})

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;