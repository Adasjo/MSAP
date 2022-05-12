import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { spotifyGet } from "../../utilities/apiUtils"
import "../../styles/sidebar.css"
import SidebarView from "../views/sidebarView"

function SidebarPresenter() {
    const navigate = useNavigate()
    const accessToken = useSelector(state => state.spotify.accessToken)
    const spotifyState = useSelector(state => state.spotify.currentState)
    const [data, setData] = useState()

    useEffect(() => spotifyGet("/me/playlists?limit=50", accessToken).then(res => setData(res)), [])

    let image = undefined

    if (spotifyState) {
        image = spotifyState.track_window.current_track.album.images[0].url
    }

    return <SidebarView
        playlists={data ? data.items : null}
        imageCurrent={image}
        navigate={{
            home: () => navigate("/home"), 
            playlist: playlist => navigate("/home/playlist?id=" + playlist.id)
        }}
    />
}

export default SidebarPresenter