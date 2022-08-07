import { createSlice } from '@reduxjs/toolkit';

const authInitialState = { isAuthenticated: false, userType: '' };

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    isLogging(state, action) {
      let userData = JSON.parse(localStorage.getItem('userDataLocal'));
      let index = userData.findIndex(
        (item) =>
          item.email === action.payload.email &&
          item.password === action.payload.password
      );
      state.isAuthenticated = index >= 0 ? true : false;
      state.userType = userData[index].userType;
    },

    isLogout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authAction = authSlice.actions;
