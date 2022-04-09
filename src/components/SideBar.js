import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import "../styles/sidebar.css"
import { spotifyGet } from "../utilities/apiUtils"

const initData = {items: []}

function SideBar() {
    const navigate = useNavigate()
    const accessToken = useSelector(state => state.spotify.accessToken)
    const [data, setData] = useState(() => initData)

    useEffect(() => spotifyGet("/me/playlists", accessToken).then(res => setData(res)), [])

    return <div className="sidebar">
        <button className="sidebarButton" onClick={() => navigate("/home")}>Home</button>
        <div className="sidebarList">
            {data.items.map(playlist => {
                return <div key={playlist.id}>
                    <a href={playlist.href}>{playlist.name}</a><br></br>
                </div>
            })}
        </div>
    </div>
}

export default SideBar