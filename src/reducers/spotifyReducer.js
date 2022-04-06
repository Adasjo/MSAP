
// Handle stores related to Spotify authentification

import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

export const spotifySlice = createSlice({
    name: "spotify",
    initialState,
    reducers: {
        updateTokens: (state, action) => {state = action.payload}
    }
})

export const { updateTokens } = spotifySlice.actions

export default spotifySlice.reducer