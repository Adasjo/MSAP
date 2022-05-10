import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Playlist from "../playlist"
import Player from "../presenters/playerPresenter"
import Sidebar from "../Sidebar"
import Queue from '../presenters/queuePresenter'
import SearchbarPresenter from '../presenters/searchbarPresenter'
import ProfilePresenter from "../presenters/profilePresenter"
import { useSelector } from 'react-redux'

function HomeView(props){
    const navigate = useNavigate()
    const username = useSelector(state => state.firebase.auth.displayName)
    return <div className="homeGrid">
        <button onClick={() => navigate("/home/profile")} className="profileButton" disabled={window.location.pathname == "/home/profile"}>{username ? username : "Profile"}</button>
        <div className="mainContent">
            <Sidebar/>
            <Routes>
                <Route path="/playlist" element={<Playlist/>}/>
                <Route path="/queue" element={<Queue/>}/>
                <Route path="/profile" element={<ProfilePresenter/>}/>
                <Route path="*" element={<SearchbarPresenter/>}/>
            </Routes>
        </div>
        <Player/>
    </div>
}

export default HomeView