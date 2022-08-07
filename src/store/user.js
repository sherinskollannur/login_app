import { createSlice } from '@reduxjs/toolkit';

let initialLocal = localStorage.getItem('userDataLocal');

if (!initialLocal) {
  localStorage.setItem(
    'userDataLocal',
    '[{"userName": "admin", "password": "admin", "email": "admin@gmail.com","userType":"admin"}]'
  );
}

const userInitialState = JSON.parse(localStorage.getItem('userDataLocal'));

console.log(userInitialState);

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    addUserData(state, action) {
      state.push(action.payload);
      localStorage.setItem('userDataLocal', JSON.stringify(state));
      console.log(action.payload);
    },
  },
});

export const userActions = userSlice.actions;
