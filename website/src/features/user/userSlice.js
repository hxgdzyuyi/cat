import { createSlice } from '@reduxjs/toolkit'

const initialState = {
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUser: (state, action) => {
      return action.payload
    },
  },
})

export const { changeUser } = userSlice.actions

export default userSlice.reducer
