import React from 'react'
import Player from "../presenters/playerPresenter"
import Sidebar from "../presenters/sidebarPresenter"

function HomeView({username, profileNav, mainContent , inProfile}) {
    return <div className="homeGrid">
        <button onClick={profileNav} className="profileButton" disabled={inProfile}>{username ? username : "Profile"}</button>
        <div className="mainContent">
            <Sidebar/>
            {mainContent}
        </div>
        <Player/>
    </div>
}

export default HomeView