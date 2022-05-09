import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import SearchBar from "../searchBar"
import Playlist from "../playlist"
import Player from "../presenters/playerPresenter"
import Sidebar from "../Sidebar"
import Queue from '../presenters/queuePresenter'
import ProfilePresenter from '../presenters/profilePresenter'
import { useFirebase } from 'react-redux-firebase'

function HomeView(props){
    const navigate = useNavigate()
    const user = useFirebase().auth().currentUser
    return <div className="homeGrid">
        <button onClick={() => navigate("/home/profile")} className="profileButton" disabled={window.location.pathname == "/home/profile"}>{user.displayName ? user.displayName : "Profile"}</button>
        <div className="mainContent">
            <Sidebar/>
            <Routes>
                <Route path="/playlist" element={<Playlist/>}/>
                <Route path="/queue" element={<Queue/>}/>
                <Route path="/profile" element={<ProfilePresenter/>}/>
                <Route path="*" element={<SearchBar/>}/>
            </Routes>
        </div>
        <Player/>
    </div>
}

export default HomeView