import React from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import "../styles/auth.css"

function SignIn(props) {
    const store = props.store;

    function onChange(actionType, e) {
        store.dispatch({type: actionType, payload: e.target.value})
    }

    function onSubmit() {
        console.log(store.getState())
        const auth = getAuth()
        const state = store.getState().userInfo;
        signInWithEmailAndPassword(auth, state.email, state.password)
            .then(userCred => {
                store.dispatch({type: "updateID", payload: userCred.user.uid})
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