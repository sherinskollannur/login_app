import { createSlice } from '@reduxjs/toolkit';

let initialLocal = localStorage.getItem('userDataLocal');

if (!initialLocal) {
  localStorage.setItem(
    'userDataLocal',
    '[{"userName": "admin", "password": "admin", "email": "admin@gmail.com","userType":"admin"}]'
  );
}

const userInitialState = JSON.parse(localStorage.getItem('userDataLocal'));

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    addUserData(state, action) {
      let index = state.findIndex(
        (user) => user.email === action.payload.email
      );
      if (index === -1) {
        state.push(action.payload);
        localStorage.setItem('userDataLocal', JSON.stringify(state));
      }
    },
  },
});

export const userActions = userSlice.actions;
