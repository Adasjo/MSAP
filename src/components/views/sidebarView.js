import spinner from "../../assets/spinner.gif"
import "../../styles/sidebar.css"
import React from "react"
<<<<<<< HEAD
function SidebarView(props){
    const navigate = useNavigate()
    return <div className="sidebar">
    <div className="sidebarContainer">
        <div className="sidebarHeader">
            <button onClick={() => navigate("/home")}>Home</button>
=======

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
            <button onClick={navigate.home}>Home</button>
>>>>>>> e3ae5a0a5e0e93cdbdf622b3d2cbc5f326972293
        </div>
        <div className="sidebarList">
            {playlists ? renderPlaylists() : <img src={spinner}/>}
        </div>
    </div>
    {<img className="currentlyPlaying" src={imageCurrent ? imageCurrent : spinner}/>}
</div>
}

export default SidebarView