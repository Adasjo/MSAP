import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { handleRedirect, spotifyAuthorize, spotifyGet } from "../utilities/apiUtils"

function Spotify() {
    const spotify = useSelector(state => state.spotify)
    const dispatch = useDispatch()

    if (spotify) {
        console.log("Trying to fetch some data")
        spotifyGet("/me/playlists", spotify.accessToken).then(res => console.log(res)).catch(e => console.log(e))
    }

    if (!spotify && window.location.search.length > 10) {
        handleRedirect().then(res => {
            if (!spotify) 
                dispatch({type: "spotify/updateTokens", payload: res})
        })
        return <div>
                <div>Request processed</div>
                <div>{JSON.stringify(spotify)}</div>
            </div>
    } else if (!spotify) {
        spotifyAuthorize()
        return <div>Requesting spotify authentification</div>
    } else {
        return <div>Already authenticated</div>
    }
}

export default Spotify