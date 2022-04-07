import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useFirebase } from "react-redux-firebase"
import { useNavigate } from "react-router-dom"
import { handleRedirect, spotifyAuthorize } from "../utilities/apiUtils"

function Spotify() {
    const spotify = useSelector(state => state.spotify)
    const uid = useSelector(state => state.firebase.auth.uid)
    const firebase = useFirebase()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    if (spotify.accessToken || !uid)
        return null

    if (!spotify.accessToken && window.location.search.length > 10) {
        handleRedirect(dispatch, firebase, navigate).catch(e => console.log(e))
        return <div>
                <div>Request processed</div>
                <div>{JSON.stringify(spotify)}</div>
            </div>
    } else if (!spotify.accessToken) {
        spotifyAuthorize()
        return <div>Requesting spotify authentification</div>
    } else {
        return <div>Already authenticated</div>
    }
}

export default Spotify