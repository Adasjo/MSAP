import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "../config/fbConfig"

/*
*   Function for singing in with firebase
*/
function firebase_signIn(email, password) {
    const auth = getAuth(firebase)
    signInWithEmailAndPassword(auth, email, password)
        .then(userCred => {
            // Sign-in successful
            dispatch({type: "updateID", payload: userCred.user.uid})
            window.location.href = "home"
        })
        .catch(error => console.log(error))
}

/*
*   Function for signing up with firebase
*/
function firebase_signUp(email, password) {
    const auth = getAuth(firebase)
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCred => {
            // Sign-up successful
            dispatch({type: "updateID", payload: userCred.user.uid})
            window.location.href = "getting-started"
        })
        .catch(error => console.log(error))
}

/*
*   Function for signing out from firebase
*/
function firebase_signOut() {
    const auth = getAuth(firebase)
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch({type: "signOut"})
      window.location.href = "sign-in"
    })
    .catch(error => console.log(error))
}

export {firebase_signIn, firebase_signUp, firebase_signOut}