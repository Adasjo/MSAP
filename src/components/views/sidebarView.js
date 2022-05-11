import spinner from "../../assets/spinner.gif"
import "../../styles/sidebar.css"
import { useNavigate } from "react-router-dom"
import React from "react"
function SidebarView(props){
    const navigate = useNavigate()
    return <div className="sidebar">
    <div className="sidebarContainer">
        <div className="sidebarHeader">
            <button onClick={() => navigate("/home")}>Home</button>
        </div>
        <div className="sidebarList">
            {props.data ? props.renderPlaylists() : <img src={spinner}/>}
        </div>
    </div>
    {<img className="currentlyPlaying" src={props.image ? props.image : spinner}/>}
</div>
}

export default SidebarView