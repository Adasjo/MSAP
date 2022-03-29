import React from "react"
import {useSelector, useDispatch} from "react-redux"
import { Link } from "react-router-dom"
import "../styles/auth.css"
import { useFirebase } from "react-redux-firebase"

function SignUp() {
    const {email: email, password: password} = useSelector(state => state.userInfo)
    const firebase = useFirebase()
    const dispatch = useDispatch()

    function onChange(actionType, e) {
        dispatch({type: actionType, payload: e.target.value})
    }

    function onSubmit() {
        firebase.createUser({email: email, password: password})
            .then(userInfo => {
                // Sign-up successful
                console.log(userInfo)
                dispatch({type: "updateID", payload: userInfo.uid})
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