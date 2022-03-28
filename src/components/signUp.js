import React from "react"
import {useSelector, useDispatch} from "react-redux"
import { firebase_signUp } from "../utilities/auth"
import "../styles/auth.css"

function SignUp() {
    const userInfo = useSelector(state => state.userInfo)
    const dispatch = useDispatch()

    function onChange(actionType, e) {
        dispatch({type: actionType, payload: e.target.value})
    }

    function onSubmit() {
        firebase_signUp(userInfo.email, userInfo.password)
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
        </div>
    </div>
}

export default SignUp