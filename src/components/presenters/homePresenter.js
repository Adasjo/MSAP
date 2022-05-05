import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from 'react-router-dom'
import { getNewToken } from "../../utilities/apiUtils"
import HomeView from "../views/homeView"


import "../../styles/home.css"

function HomePresenter() {
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

    return <HomeView/>
}

export default HomePresenter