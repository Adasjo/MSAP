import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { handleRedirect, spotifyAuthorize, spotifyGet } from "../utilities/apiUtils"

function Spotify(props) {
    const spotify = useSelector(state => state.spotify)
    const dispatch = useDispatch()
    console.log(spotify)
    if (spotify.accessToken) {
        console.log("Trying to fetch data")
        spotifyGet("/me/playlists", spotify.accessToken).then(res => console.log(res)).catch(e => console.log(e))
    }

    if (window.location.search.length > 10) {
        handleRedirect().then(res => dispatch({type: "updateTokens", payload: res}))
        return <div>
                <div>Request processed</div>
                <div>{JSON.stringify(spotify)}</div>
            </div>
    } else {
        spotifyAuthorize()
        return <div>Requesting spotify authentification</div>
    }
}

export default Spotify