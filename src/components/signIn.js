import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { firebase_signIn } from "../utilities/auth"
import { Link } from "react-router-dom";
import "../styles/auth.css" 

function SignIn() {
    const userInfo = useSelector(state => state.userInfo)
    const dispatch = useDispatch()


    function onChange(actionType, e) {
        dispatch({type: actionType, payload: e.target.value})
    }

    function onSubmit() {
        firebase_signIn(userInfo.email, userInfo.password)
    }

    return <div className="authPage">
        <div className="authBox">
            <h3>Welcome back!</h3>
            <div className="formFieldDiv">
                <label htmlFor="email">Email</label><br></br>
                <input className="formField" type="email" id={"email"} onChange={e => onChange("updateEmail", e)}></input>
            </div>
            <div className="formFieldDiv">
                <label htmlFor="pw">Password</label>
                <input className="formField" type="password" id={"pw"} onChange={e => onChange("updatePassword", e)}></input>
                <Link to="/reset">Forgot password?</Link>
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