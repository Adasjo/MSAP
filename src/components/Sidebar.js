import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { spotifyGet } from "../utilities/apiUtils"

import "../styles/sidebar.css"

const initData = {items: []}

function Sidebar() {
    const navigate = useNavigate()
    const accessToken = useSelector(state => state.spotify.accessToken)
    const spotifyState = useSelector(state => state.spotify.currentState)
    const [data, setData] = useState(() => initData)

    useEffect(() => spotifyGet("/me/playlists", accessToken).then(res => setData(res)), [])

    let image = undefined

    if (spotifyState) {
        image = spotifyState.track_window.current_track.album.images[0].url
    }

    return <div className="sidebar">
        <div>
            <div className="sidebarHeader">
                <button className="sidebarButton" onClick={() => navigate("/home")}>Home</button>
                <button className="sidebarButton" onClick={() => navigate("/home/search")}>Search</button>
            </div>
            <div className="sidebarList">
                {data.items.map(playlist => {
                    return <div key={playlist.id}>
                        <button className="playlistButton" onClick={() => navigate("/home/playlist?id=" + playlist.id)}>{playlist.name}</button><br></br>
                    </div>
                })}
            </div>
        </div>
        {image ? <img className="currentlyPlaying" src={image}/> : ""}
    </div>
}

export default Sidebar