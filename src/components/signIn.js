import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import "../styles/auth.css"

function SignIn() {
    const userInfo = useSelector(state => state.userInfo)
    const dispatch = useDispatch()


    function onChange(actionType, e) {
        dispatch({type: actionType, payload: e.target.value})
    }

    function onSubmit() {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
            .then(userCred => {
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
                <a href="reset">Forgot password?</a>
            </div>
            <div className="formFieldDiv"><button className="formButton" onClick={onSubmit}>Sign in</button></div>
            <div className="formFieldDiv">
                <span>Need an account? </span>
                <a href="register">Register</a>
            </div>
        </div>
    </div>
}

export default SignIn