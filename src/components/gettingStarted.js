import React from "react"
import { useSelector } from "react-redux"

import { spotifyAuthorize } from "../utilities/apiUtils"

function GettingStarted() {
    const spotify = useSelector(state => state.spotify)
    console.log(spotify)
    return <div>
        <div>
            Hi, we see that this is your first time using MSAP! To get started link your MSAP account to one of the available streaming plattforms below:
        </div>
        <button onClick={spotifyAuthorize} disabled={!spotify}>Spotify</button>
    </div>
}

export default GettingStarted