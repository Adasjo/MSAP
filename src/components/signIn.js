import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { firebase } from "../config/fbConfig"
import "../styles/auth.css" 

function SignIn() {
    const userInfo = useSelector(state => state.userInfo)
    const dispatch = useDispatch()


    function onChange(actionType, e) {
        dispatch({type: actionType, payload: e.target.value})
    }

    function onSubmit() {
        const auth = getAuth(firebase)
        signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
            .then(userCred => {
                // Sign-in successful
                dispatch({type: "updateID", payload: userCred.user.uid})
                window.location.href = "home"
            })
            .catch(error => console.log(error))
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