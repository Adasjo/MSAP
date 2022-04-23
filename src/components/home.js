import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes } from 'react-router-dom'
import { getNewToken } from "../utilities/apiUtils"
import Player from "./player"
import SearchBar from "./searchBar"
import Playlist from "./playlist"
import Sidebar from "./Sidebar"
import NoPage from "./noPage"

import "../styles/home.css"

function Home() {
    const dispatch = useDispatch()
    const spotify = useSelector(state => state.spotify)

    // Check whether there is a Spotify access token in the state. 
    // If not present, try fetch from firebase
    if (!spotify.accessToken && !spotify.triedLoad) {
        dispatch(getNewToken())
        return null
    } else if (!spotify.accessToken) {
        return <Navigate to={"/getting-started"}/>
    }

    return <div className="homeGrid">
        <div className="sidebarContainer"><Sidebar/></div>
        <div className="mainContent">
            <Routes>
                <Route path="/search" element={<SearchBar/>}/>
                <Route path="/playlist" element={<Playlist/>}/>
                <Route path="*" element={<SearchBar/>}/>
            </Routes>
        </div>
        <div className="playerContainer"><Player/></div>
    </div>
}

export default Home