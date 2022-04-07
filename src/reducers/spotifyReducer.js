
// Handle stores related to Spotify authentification

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
}

export const spotifySlice = createSlice({
    name: "spotify",
    initialState,
    reducers: {
        updateTokens: (state, action) => {
            state.accessToken = action.payload.access_token
            state.refreshToken = action.payload.refresh_token
        }
    }
})

export const { updateTokens } = spotifySlice.actions

export default spotifySlice.reducer