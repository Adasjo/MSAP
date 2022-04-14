import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { spotifyGet } from "../utilities/apiUtils"

import "../styles/sidebar.css"

const initData = {items: []}

function Sidebar() {
    const navigate = useNavigate()
    const accessToken = useSelector(state => state.spotify.accessToken)
    const [data, setData] = useState(() => initData)

    useEffect(() => spotifyGet("/me/playlists", accessToken).then(res => setData(res)), [])

    return <div className="sidebar">
        <button className="sidebarButton" onClick={() => navigate("/home")}>Home</button>
        <div className="sidebarList">
            {data.items.map(playlist => {
                return <div key={playlist.id}>
                    <button onClick={() => navigate("/playlist?id=" + playlist.id)}>{playlist.name}</button><br></br>
                </div>
            })}
        </div>
    </div>
}

export default Sidebar