import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      user:JSON.parse(localStorage.getItem('user')) ?? false
};

const auth = createSlice({
      name: 'auth',
      initialState,
      reducers: {
        login: (state, action) => {
          state.user = action.payload;
          localStorage.setItem('user',JSON.stringify(action.payload));
        },
        logout: (state) => {
          state.user = false;
          localStorage.removeItem('user');
        }
      }
})

export const { login, logout } = auth.actions;
export default auth.reducer