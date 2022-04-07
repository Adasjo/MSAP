
// Handle stores related to Spotify authentification

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
}

export const spotifySlice = createSlice({
    name: "spotify",
    initialState,
    reducers: {
        updateTokens: (state, action) => {
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
        }
    }
})

export const { updateTokens } = spotifySlice.actions

export default spotifySlice.reducer