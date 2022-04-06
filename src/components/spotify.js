import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { handleRedirect, spotifyAuthorize, spotifyGet } from "../utilities/apiUtils"

function Spotify() {
    const spotify = useSelector(state => state.spotify)
    const dispatch = useDispatch()
    const nav = useNavigate()
    console.log(spotify)

    if (spotify.accessToken) {
        console.log("Trying to fetch some data")
        spotifyGet("/me/playlists", spotify.accessToken).then(res => console.log(res)).catch(e => console.log(e))
    }

    if (window.location.search.length > 10) {
        handleRedirect().then(res => {
            console.log(res)
            dispatch({type: "spotify/updateTokens", payload: res})})
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