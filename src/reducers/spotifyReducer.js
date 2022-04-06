
// Handle stores related to Spotify authentification

const init = {}

export default function spotifyReducer(state = init, action) {
    switch (action.type) {
        case "updateTokens":
            return {...state, ...action.payload}
        default:
            return state
    }
}