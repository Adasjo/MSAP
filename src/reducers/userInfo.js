import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    email: "",
    password: ""
}

export const userSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        updateEmail: (state, action) => {state.email = action.payload},
        updatePassword: (state, action) => {state.password = action.payload}
    }
})

export const { updateEmail, updatePassword } = userSlice.actions

export default userSlice.reducer