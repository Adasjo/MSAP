
// Handle stores related to settings

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
        }
    }
})

export const { setTheme } = settingsSlice.actions

export default settingsSlice.reducer