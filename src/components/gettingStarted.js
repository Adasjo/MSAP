import React from "react"
import { useSelector } from "react-redux"

import { spotifyAuthorize } from "../utilities/apiUtils"

function GettingStarted() {
    const state = useSelector(state => state)
    console.log(state)
    return <div>
        <div>
            Hi, we see that this is your first time using MSAP! To get started link your MSAP account to one of the available streaming plattforms bellow:
        </div>
        <button onClick={spotifyAuthorize} disabled={state.spotify.accessToken}>Spotify</button>
    </div>
}

export default GettingStarted