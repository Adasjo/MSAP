import React from "react"
import "../styles/auth.css"

function SignIn(props) {
    const store = props.store;

    function onChange(actionType, e) {
        store.dispatch({type: actionType, payload: e.target.value})
    }

    function onSubmit(e) {
        console.log(store.getState())
    }

    return <div className="authForm">
        <input className="formField" type="email" id={"email"} onChange={e => onChange("updateEmail", e)}></input>
        <input className="formField" type="password" id={"pw"} onChange={e => onChange("updatePassword", e)}></input>
        <button onClick={onSubmit}>Sign in</button>
    </div>
}

export default SignIn