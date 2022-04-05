import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import "../styles/auth.css" 
import { useFirebase } from "react-redux-firebase"

function SignIn() {
    const {email: email, password: password} = useSelector(state => state.userInfo)
    const firebase = useFirebase()
    const dispatch = useDispatch()

    function onChange(actionType, e) {
        dispatch({type: "userInfo/" + actionType, payload: e.target.value})
    }

    function onSubmit() {
        console.log(email + ", " + password)
        firebase.login({email: email, password: password})
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