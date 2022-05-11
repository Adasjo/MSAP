import spinner from "../../assets/spinner.gif"
import "../../styles/sidebar.css"
import React from "react"

import homeButton from "../../assets/home.svg"

function SidebarView({playlists, navigate, imageCurrent}){

    function renderPlaylists() {
        return playlists.map(playlist => 
            <div key={playlist.id}>
                <button className="playlistButton" onClick={() => navigate.playlist(playlist)}>{playlist.name}</button>
            </div>
        )
    } 

    return <div className="sidebar">
    <div className="sidebarContainer">
        <div className="sidebarHeader">
            <h3>MSAP</h3>
            <label>
                <img src={homeButton}/>
                <button onClick={navigate.home}>Home</button>
            </label>
        </div>
        <div className="sidebarList">
            {playlists ? renderPlaylists() : <img src={spinner}/>}
        </div>
    </div>
    {<img className="currentlyPlaying" src={imageCurrent ? imageCurrent : spinner}/>}
</div>
}

export default SidebarView