import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useFirebase } from "react-redux-firebase"

import "../styles/auth.css" 

function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPW] = useState("")
    const [error, setError] = useState()
    const [message, setMessage] = useState()
    const firebase = useFirebase()
    const navigate = useNavigate()

    function onSubmit() {
        firebase.login({email, password})
            .then(_ => navigate("/home", {replace: true}))
            .catch(er => {
                setError("Incorrect email or password")
                firebase.initializeAuth()
            })
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

    return <div className="authPage">
        <div className="authBox">
            <h3>Welcome back!</h3>
            <div className="formFieldDiv">
                <label htmlFor="email">Email</label><br></br>
                <input className="formField" type="email" onChange={e => setEmail(e.target.value)}></input>
            </div>
            <div className="formFieldDiv">
                <label htmlFor="pw">Password</label>
                <input className="formField" type="password" onChange={e => setPW(e.target.value)}></input>
                <a onClick={reset} style={{cursor:"pointer"}}>Forgot password?</a>
                {error ? <div className="error">{error}</div> : ""}
                {message ? <div>{message}</div> : ""}
            </div>
            <div className="formFieldDiv"><button className="formButton" onClick={onSubmit}>Sign-in</button></div>
            <div className="formFieldDiv">
                <span>Need an account? </span>
                <Link to="/register">Register</Link>
            </div>
        </div>
    </div>
}

export default SignIn