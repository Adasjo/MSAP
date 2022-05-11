import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getFirebase } from "react-redux-firebase"
import { Navigate } from 'react-router-dom'

import { getNewToken } from "../../utilities/apiUtils"
import { setTheme } from "../../utilities/utils"
import HomeView from "../views/homeView"

import "../../styles/home.css"

function HomePresenter() {
    const dispatch = useDispatch()
    const accessToken = useSelector(state => state.spotify.accessToken)
    const triedLoad = useSelector(state => state.spotify.triedLoad)
    const uid = useSelector(state => state.firebase.auth.uid)
    const theme = useSelector(state => state.settings.theme)

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

    return <HomeView/>
}

export default HomePresenter