import { createSlice } from '@reduxjs/toolkit'

const authInitialState = { isAuthenticated: false }

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    isLogging(state) {
      state.isAuthenticated = true
    },

    isLogout(state) {
      state.isAuthenticated = false
    },
  },
})

export const authAction = authSlice.actions
