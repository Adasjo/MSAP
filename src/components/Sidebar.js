import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { spotifyGet } from "../utilities/apiUtils"

import "../styles/sidebar.css"

import spinner from "../assets/spinner.gif"

const initData = {items: []}

function Sidebar() {
    const navigate = useNavigate()
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
                <button className="playlistButton" onClick={() => navigate("/home/playlist?id=" + playlist.id)}>{playlist.name}</button>
            </div>
        )
    } 

    return <div className="sidebar">
        <div className="sidebarContainer">
            <div className="sidebarHeader">
                <button onClick={() => navigate("/home")}>Home</button>
            </div>
            <div className="sidebarList">
                {data ? renderPlaylists() : <img src={spinner}/>}
            </div>
        </div>
        {<img className="currentlyPlaying" src={image ? image : spinner}/>}
    </div>
}

export default Sidebar