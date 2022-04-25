import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../styles/auth.css"
import { useFirebase } from "react-redux-firebase"

function SignUp() {
    const [email, setEmail] = useState()
    const [password, setPW] = useState()
    const firebase = useFirebase()
    const navigate = useNavigate()

    function onSubmit() {
        firebase.createUser({email, password})
            .then(_ => {
                // Sign-up successful
                navigate("../getting-started", {replace: true})
            })
            .catch(console.log)
    }

    return <div className="authPage">
        <div className="authBox">
            <h3>Register account</h3>
            <div className="formFieldDiv">
                <label htmlFor="email">Email</label>
                <input className="formField" type="email" id="email" onChange={e => setEmail(e.target.value)}></input>
            </div>
            <div className="formFieldDiv">
                <label htmlFor="pw">Password</label>
                <input className="formField" type="password" id="pw" onChange={e => setPW(e.target.value)}></input>
            </div>
            <div className="formFieldDiv"><button className="formButton" onClick={onSubmit}>Register</button></div>
            <div className="formFieldDiv">
                <span>Have an existing account? </span>
                <Link to="/sign-in">Sign-in</Link>
            </div>
        </div>
    </div>
}

export default SignUp