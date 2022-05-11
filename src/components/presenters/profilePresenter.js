import React, { useState } from "react"
import { useFirebase } from "react-redux-firebase"
import { useNavigate } from "react-router-dom"
import ProfileView from "../views/profileView"

import spinner from "../../assets/spinner.gif"

const emptyUsername = /^\s+$/

function ProfilePresenter() {
    const nav = useNavigate()
    const firebase = useFirebase()
    const user = firebase.auth().currentUser
    const [photo, setPhoto] = useState(user.photoURL)
    const name = user.displayName
    const email = user.email
    const [trueer, setTrueer] = useState(0);

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
    const btn = document.querySelector(".btn-toggle");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: light)");
    
    function toggleDark() {
        if(trueer === 0) {
            document.documentElement.style.setProperty("--backg", "black")
            document.documentElement.style.setProperty("--hovcol", "grey")
            document.documentElement.style.setProperty("--textcol", "white")
            document.documentElement.style.setProperty("--sectextcol", "rgb(223, 223, 223)")
            document.documentElement.style.setProperty("--imgcol", "invert(100%)")
            setTrueer(1);
        }else{
            document.documentElement.style.setProperty("--backg", "white")
            document.documentElement.style.setProperty("--hovcol", "rgb(223, 223, 223)")
            document.documentElement.style.setProperty("--textcol", "black")
            document.documentElement.style.setProperty("--sectextcol", "grey")
            document.documentElement.style.setProperty("--imgcol", "invert(0%)")
            setTrueer(0);
        }

        
        //console.log("Toggle dark mode!");
        //if (prefersDarkScheme.matches) {
        //    document.body.classList.toggle("light-theme");
        //  } else {
        //    document.body.classList.toggle("dark-theme");
        //  }
    }

    async function logout() {
        await firebase.logout()
        nav("/sign-in")
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