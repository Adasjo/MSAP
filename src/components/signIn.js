import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import "../styles/auth.css"

function SignIn() {
    const {_name, _id, email, password} = useSelector(state => state.userInfo)
    const dispatch = useDispatch()

    function onChange(actionType, e) {
        dispatch({type: actionType, payload: e.target.value})
    }

    function onSubmit() {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(userCred => {
                dispatch({type: "updateID", payload: userCred.user.uid})
                window.location.hash = "#signed-in"
            })
            .catch(error => console.log(error))
    }

    return <div className="authForm">
        <h2>Sign in</h2>
        <input className="formField" type="email" id={"email"} onChange={e => onChange("updateEmail", e)}></input>
        <input className="formField" type="password" id={"pw"} onChange={e => onChange("updatePassword", e)}></input>
        <button onClick={onSubmit}>Sign in</button>
    </div>
}

export default SignIn