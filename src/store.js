import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/loginUserSlices';
import userReducer from './Slices/userSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    user : userReducer,
  },
});

export default store;
