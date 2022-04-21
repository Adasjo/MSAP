import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { getNewToken } from "../utilities/apiUtils"
import Player from "./player"
import SearchBar from "./searchBar"
import Sidebar from "./Sidebar"

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

    return <div>
            Temporary home screen!
            <Sidebar/>
            <SearchBar/>
            <Player/>
        </div>
}

export default Home