import React from "react"
import {useSelector, useDispatch} from "react-redux"
import { Link } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { firebase } from "../config/fbConfig"
import "../styles/auth.css"

function SignUp() {
    const userInfo = useSelector(state => state.userInfo)
    const dispatch = useDispatch()

    function onChange(actionType, e) {
        dispatch({type: actionType, payload: e.target.value})
    }

    function onSubmit() {
        const auth = getAuth(firebase)
        createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
            .then(userCred => {
                // Sign-up successful
                dispatch({type: "updateID", payload: userCred.user.uid})
                window.location.href = "getting-started"
            })
            .catch(error => console.log(error))
    }

    return <div className="authPage">
        <div className="authBox">
            <h3>Register account</h3>
            <div className="formFieldDiv">
                <label htmlFor="email">Email</label>
                <input className="formField" type="email" id="email" onChange={e => onChange("updateEmail", e)}></input>
            </div>
            <div className="formFieldDiv">
                <label htmlFor="pw">Password</label>
                <input className="formField" type="password" id="pw" onChange={e => onChange("updatePassword", e)}></input>
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