import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { handleRedirect } from "../utilities/apiUtils"

function Spotify() {
    const accessToken = useSelector(state => state.spotify.accessToken)
    const uid = useSelector(state => state.firebase.auth.uid)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    if (accessToken || !uid)
        return <div>Waiting for Firebase auth...</div>

    if (!accessToken && window.location.search.length > 10) {
        dispatch(handleRedirect(navigate))
        return <div>Processing Spotify authentification...</div>
    }
    return <div>Error</div>
}

export default Spotify