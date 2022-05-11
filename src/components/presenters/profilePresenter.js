import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useFirebase } from "react-redux-firebase"
import { useNavigate } from "react-router-dom"

import { persistor } from "../../store"
import { unmountSpotifyPlayerSDK } from "../../utilities/apiUtils"
import { setTheme } from "../../utilities/utils"

import ProfileView from "../views/profileView"
import spinner from "../../assets/spinner.gif"

const emptyUsername = /^\s+$/

function ProfilePresenter() {
    const dispatch = useDispatch()
    const firebase = useFirebase()
    const nav = useNavigate()
    const user = firebase.auth().currentUser
    const [photo, setPhoto] = useState(user.photoURL)
    const name = user.displayName
    const email = user.email
    const theme = useSelector(state => state.settings.theme)

    async function uploadImage(e) {
        const file = e.target.files[0]
        const path = "/users/" + user.uid
        setPhoto(spinner)
        const snapshot = await firebase.storage().ref(path).put(file)
        const url = await snapshot.ref.getDownloadURL()
        user.updateProfile({photoURL: url})
        setPhoto(url)
    }

    function changeName(e) {
        const newName = e.target.value
        if (newName == user.displayName || newName.test(emptyUsername)) return
        user.updateProfile({displayName: newName})
    }
    //const btn = document.querySelector(".btn-toggle");
    //const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: light)");
    
    function toggleDark() {
        const newTheme = theme == "light" ? "dark" : "light"
        setTheme(newTheme)
        dispatch({type: "settings/setTheme", action: newTheme})
        firebase.database().ref(`users/${user.uid}/theme`).set(newTheme)
    }

    async function logout() {
        nav("/sign-in")
        await firebase.logout()
        dispatch(unmountSpotifyPlayerSDK())
        persistor.purge()
    }

    return <ProfileView 
        username={name ? name : "specify username..."} 
        email={email} 
        photoURL={photo} 
        theme={theme}
        uploadImage={uploadImage} 
        changeName={changeName}
        toggleDark={toggleDark}
        logout={logout}
    />
}

export default ProfilePresenter