import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.currentUser = null
            state.loading = true
            state.errorMessage = null
        },
        loginSuccess: (state, action) => {
            state.currentUser = action.payload
            state.loading = false
            state.errorMessage = null
        },
        loginFailure: (state, action) => {
            state.currentUser = null
            state.loading = false
            state.errorMessage = action.payload
        },
        logout: (state) => {
            state.currentUser = null
            state.loading = false
            state.errorMessage = null
        }
    }
})

export default userSlice.reducer;
export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions