import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useFirebase } from "react-redux-firebase"

import "../styles/auth.css" 

function SignIn() {
    const [email, setEmail] = useState()
    const [password, setPW] = useState()
    const [error, setError] = useState()
    const firebase = useFirebase()
    const navigate = useNavigate()

    function onSubmit() {
        firebase.login({email, password})
            .then(_ => navigate("/home", {replace: true}))
            .catch(e => {
                setError(e)
                firebase.initializeAuth()
            })
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
                <Link to="/reset">Forgot password?</Link>
                {error ? <div className="error">Incorrect email or password</div> : ""}
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