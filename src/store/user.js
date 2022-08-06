import { createSlice } from '@reduxjs/toolkit';

const userInitialState = JSON.parse(localStorage.getItem('USER_DATA'));

console.log(userInitialState);

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    addUserData(state, action) {
      state.push(action.payload);
      let arr = JSON.parse(localStorage.getItem('USER_DATA'));
      console.log(arr);
      console.log(action.payload);

      localStorage.setItem('USER_DATA', arr.push(action.payload));
    },
  },
});

export const userActions = userSlice.actions;
