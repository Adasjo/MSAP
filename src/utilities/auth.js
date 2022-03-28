import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "../config/fbConfig"

function firebase_signIn(email, password) {
    const auth = getAuth(firebase)
    signInWithEmailAndPassword(auth, email, password)
        .then(userCred => {
            dispatch({type: "updateID", payload: userCred.user.uid})
            window.location.href = "home"
        })
        .catch(error => console.log(error))
}

function firebase_signUp(email, password) {
    const auth = getAuth(firebase)
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCred => {
            dispatch({type: "updateID", payload: userCred.user.uid})
            window.location.href = "getting-started"
        })
        .catch(error => console.log(error.message))
}

export {firebase_signIn, firebase_signUp}