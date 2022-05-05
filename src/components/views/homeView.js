import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SearchBar from "../searchBar"
import Playlist from "../playlist"
import Player from "../presenters/playerPresenter"
import Sidebar from "../Sidebar"
import Queue from '../presenters/queuePresenter'

function HomeView(props){
    return <div className="homeGrid">
        <div className="mainContent">
            <Sidebar/>
            <Routes>
                <Route path="/playlist" element={<Playlist/>}/>
                <Route path="/queue" element={<Queue/>}/>
                <Route path="*" element={<SearchBar/>}/>
            </Routes>
        </div>
        <Player/>
    </div>
}

export default HomeView