import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useFirebase } from "react-redux-firebase"
import { useNavigate } from "react-router-dom"
import { persistor } from "../../store"

import ProfileView from "../views/profileView"
import spinner from "../../assets/spinner.gif"
import { unmountSpotifyPlayerSDK } from "../../utilities/apiUtils"

const emptyUsername = /^\s+$/

function ProfilePresenter() {
    const dispatch = useDispatch()
    const firebase = useFirebase()
    const nav = useNavigate()
    const user = firebase.auth().currentUser
    const [photo, setPhoto] = useState(user.photoURL)
    const name = user.displayName
    const email = user.email


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

    function toggleDark() {
        console.log("Toggle dark mode!")
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
        uploadImage={uploadImage} 
        changeName={changeName}
        toggleDark={toggleDark}
        logout={logout}
    />
}

export default ProfilePresenter