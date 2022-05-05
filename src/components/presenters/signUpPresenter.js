import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useFirebase } from "react-redux-firebase"

import SignUpView from "../views/signUpView"

function SignUpPresenter() {
    const [email, setEmail] = useState()
    const [password, setPW] = useState()
    const [error, setError] = useState()
    const firebase = useFirebase()
    const navigate = useNavigate()

    function onSubmit() {
        firebase.createUser({email, password})
            .then(_ => {
                // Sign-up successful
                navigate("../getting-started", {replace: true})
            })
            .catch(e => setError(e.message))
    }

    return <SignUpView 
        setEmail = {setEmail}
        setPW = {setPW}
        onSubmit = {onSubmit}
        error = {error}/>
}

export default SignUpPresenter