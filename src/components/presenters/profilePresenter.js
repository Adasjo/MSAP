import React, { useState } from "react"
import { useFirebase } from "react-redux-firebase"
import ProfileView from "../views/profileView"

function ProfilePresenter() {
    const firebase = useFirebase()
    const user = firebase.auth().currentUser
    const [name, setName] = useState(user.displayName)
    const [photo, setPhoto] = useState(user.photoURL)
    const email = user.email


    async function uploadImage(e) {
        const file = e.target.files[0]
        const path = "/users/" + user.uid
        const snapshot = await firebase.storage().ref(path).put(file)
        const url = await snapshot.ref.getDownloadURL()
        user.updateProfile({photoURL: url})
        setPhoto(url)
    }

    function changeName(e) {
        console.log(e)
        if (e.key != "Enter") return
        const newName = e.target.value
        user.updateProfile({displayName: newName})
        setName(newName)
    }

    return <ProfileView 
        username={name ? name : "no_username"} 
        email={email} 
        photoURL={photo} 
        uploadImage={uploadImage} 
        changeName={changeName}
    />
}

export default ProfilePresenter