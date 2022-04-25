import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes, Navigate } from 'react-router-dom'
import { getNewToken } from "../utilities/apiUtils"
import Player from "./player"
import SearchBar from "./searchBar"
import Playlist from "./playlist"
import Sidebar from "./Sidebar"

import "../styles/home.css"

function Home() {
    const dispatch = useDispatch()
    const accessToken = useSelector(state => state.spotify.accessToken)
    const triedLoad = useSelector(state => state.spotify.triedLoad)

    // Check whether there is a Spotify access token in the state. 
    // If not present, try fetch from firebase
    if (!accessToken && !triedLoad) {
        dispatch(getNewToken())
        return null
    } else if (!accessToken) {
        return <Navigate to={"/getting-started"}/>
    }
                     
    return <div className="homeGrid">
        <div className="mainContent">
            <Sidebar/>
            <Routes>
                <Route path="/playlist" element={<Playlist/>}/>
                <Route path="*" element={<SearchBar/>}/>
            </Routes>
        </div>
        <div className="footer"><Player/></div>
    </div>
}

export default Home