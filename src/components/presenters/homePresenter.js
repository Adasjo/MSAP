import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getFirebase, useFirebase } from "react-redux-firebase"
import { Navigate, useNavigate, Routes, Route } from 'react-router-dom'

import { getNewToken } from "../../utilities/apiUtils"
import { setTheme } from "../../utilities/utils"

import HomeView from "../views/homeView"
import Queue from './queuePresenter'
import SearchbarPresenter from './searchbarPresenter'
import ProfilePresenter from "./profilePresenter"
import Playlist from "./playlistPresenter"

import "../../styles/home.css"

function HomePresenter() {
    const dispatch = useDispatch()
    const accessToken = useSelector(state => state.spotify.accessToken)
    const triedLoad = useSelector(state => state.spotify.triedLoad)
    const uid = useSelector(state => state.firebase.auth.uid)
    const theme = useSelector(state => state.settings.theme)
    const navigate = useNavigate()

    // Listen to the theme property in firebase to sync the users prefered theme with the state
    useEffect(() => {
        if (!uid) return
        const ref = getFirebase().database().ref(`users/${uid}/theme`)
        ref.get()
            .then(snapshot => dispatch({type: "settings/setTheme", payload: snapshot.val()}))
            .catch()
    }, [uid])

    // Update theme on change
    useEffect(() => {
        setTheme(theme)
    }, [theme])

    // Check whether there is a Spotify access token in the state. 
    // If not present, try fetch from firebase
    if (!accessToken && !triedLoad) {
        dispatch(getNewToken())
        return null
    } else if (!accessToken) {
        return <Navigate to={"/getting-started"}/>
    }

    return <HomeView
        username={getFirebase().auth().currentUser.displayName}
        profileNav={() => navigate("/home/profile")}
        inProfile={window.location.pathname == "/home/profile"}
        mainContent={
            <Routes>
                <Route path="/playlist" element={<Playlist/>}/>
                <Route path="/queue" element={<Queue/>}/>
                <Route path="/profile" element={<ProfilePresenter/>}/>
                <Route path="*" element={<SearchbarPresenter/>}/>
            </Routes>
        }
    />
}

export default HomePresenter