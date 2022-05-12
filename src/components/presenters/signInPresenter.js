import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useFirebase } from "react-redux-firebase"
import SignInView from "../views/signInView"

import "../../styles/auth.css" 

function SignInPresenter() {
    const [email, setEmail] = useState("")
    const [password, setPW] = useState("")
    const [error, setError] = useState()
    const [message, setMessage] = useState()
    const firebase = useFirebase()
    const navigate = useNavigate()

    function onSubmit() {
        firebase.login({email, password})
            .then(_ => navigate("/home", {replace: true}))
            .catch(_ => {
                setError("Incorrect email or password")
                firebase.initializeAuth()
            })
    }

    function onKeyDown(e) {
        if (e.key != "Enter") return
        onSubmit()
    }

    /*
    *   Send a password reset email to the email.
    *   The use of `fetchSignInMethodsForEmail` ensures that the user can't see if an email is registered.
    */
    async function reset() {
        setError()        
        try {
            const res = await firebase.auth().fetchSignInMethodsForEmail(email)
            // If the length of res is 0, the user is not registered
            if (res.length == 0 || await firebase.auth().sendPasswordResetEmail(email)) {
                setMessage("Password reset email sent")
            }
        } catch {
            setError("Invalid email")
        }
    }

    return <SignInView         
        error = {error}
        message = {message}
        setEmail = {setEmail}
        setPW = {setPW}
        resetPW = {reset}
        onSubmit = {onSubmit}
        onKeyDown = {onKeyDown}
    />

}


    
export default SignInPresenter