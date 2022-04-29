import React from 'react'
import { Link } from "react-router-dom"

function SignUpView(props) {

    return <div className="authPage">
    <div className="authBox">
        <h3>Register account</h3>
        <div className="formFieldDiv">
            <label htmlFor="email">Email</label>
            <input className="formField" type="email" onChange={e => props.setEmail(e.target.value)}></input>
        </div>
        <div className="formFieldDiv">
            <label htmlFor="pw">Password</label>
            <input className="formField" type="password" onChange={e => props.setPW(e.target.value)}></input>
        </div>
        <div className="formFieldDiv"><button className="formButton" onClick={props.onSubmit}>Register</button></div>
        <div className="formFieldDiv">
            <span>Have an existing account? </span>
            <Link to="/sign-in">Sign-in</Link>
        </div>
    </div>
</div>
}

export default SignUpView