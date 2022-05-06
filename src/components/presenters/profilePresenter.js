import React, { useState } from "react"
import { useFirebase } from "react-redux-firebase"
import ProfileView from "../views/profileView"

function ProfilePresenter() {
    const firebase = useFirebase()
    const user = firebase.auth().currentUser
    const [photo, setPhoto] = useState(user.photoURL)
    const name = user.displayName
    const email = user.email


    async function uploadImage(e) {
        const file = e.target.files[0]
        const path = "/users/" + user.uid
        setPhoto(require("../../assets/spinner.gif"))
        const snapshot = await firebase.storage().ref(path).put(file)
        const url = await snapshot.ref.getDownloadURL()
        user.updateProfile({photoURL: url})
        setPhoto(url)
    }

    function changeName(e) {
        const newName = e.target.value
        if (newName == user.displayName) return
        user.updateProfile({displayName: newName})
    }

    return <ProfileView 
        username={name ? name : "<username>"} 
        email={email} 
        photoURL={photo} 
        uploadImage={uploadImage} 
        changeName={changeName}
    />
}

export default ProfilePresenter