import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { spotifyGet } from "../../utilities/apiUtils"
import "../../styles/sidebar.css"
import SidebarView from "../views/sidebarView"

function SidebarPresenter() {
    const accessToken = useSelector(state => state.spotify.accessToken)
    const spotifyState = useSelector(state => state.spotify.currentState)
    const [data, setData] = useState()

    useEffect(() => spotifyGet("/me/playlists", accessToken).then(res => setData(res)), [])

    let image = undefined

    if (spotifyState) {
        image = spotifyState.track_window.current_track.album.images[0].url
    }

    function renderPlaylists() {
        return data.items.map(playlist => 
            <div key={playlist.id}>
                <button className="playlistButton" onClick={() => useNavigate("/home/playlist?id=" + playlist.id)}>{playlist.name}</button>
            </div>
        )
    } 

    return <SidebarView
    renderPlaylists={renderPlaylists}
    data={data}
    image={image}    />
}

export default SidebarPresenter