import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { userSlice } from './user'

const store = configureStore({
  reducer: { users: userSlice.reducer, auth: authSlice.reducer },
})

export default store
