import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
//import "../../styles/auth.css"
import { useFirebase } from "react-redux-firebase"

import SignUpView from "../views/signUpView"

function SignUpPresenter() {
    const [email, setEmail] = useState()
    const [password, setPW] = useState()
    const firebase = useFirebase()
    const navigate = useNavigate()

    function onSubmit() {
        firebase.createUser({email, password})
            .then(_ => {
                // Sign-up successful
                navigate("../getting-started", {replace: true})
            })
            .catch(console.log)
    }

    return <SignUpView 
        email={email}
        password={password}
        setEmail = {setEmail}
        setPW = {setPW}
        onSubmit = {onSubmit}/>
}

export default SignUpPresenter