import spinner from "../../assets/spinner.gif"
import "../../styles/sidebar.css"
import { useNavigate } from "react-router-dom"

function SidebarView(props){
    return <div className="sidebar">
    <div className="sidebarContainer">
        <div className="sidebarHeader">
            <button onClick={() => useNavigate("/home")}>Home</button>
        </div>
        <div className="sidebarList">
            {data ? props.renderPlaylists() : <img src={spinner}/>}
        </div>
    </div>
    {<img className="currentlyPlaying" src={props.image ? props.image : spinner}/>}
</div>
}

export default SidebarView