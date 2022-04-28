import React from 'react'
import { Link } from "react-router-dom"
//import '../../styles/App.css'


function SignUpView(props) {

    function setEmailACB(email){
        props.setEmail(email);
    }
    function setPWACB(PW){
        props.setPW(PW);
    }
    
    function onSubmitACB(){
        props.onSubmit();
    }

    return <div className="authPage">
    <div className="authBox">
        <h3>Register account</h3>
        <div className="formFieldDiv">
            <label htmlFor="email">Email</label>
            <input className="formField" type="email" onChange={e => setEmailACB(e.target.value)}></input>
        </div>
        <div className="formFieldDiv">
            <label htmlFor="pw">Password</label>
            <input className="formField" type="password" onChange={e => setPWACB(e.target.value)}></input>
        </div>
        <div className="formFieldDiv"><button className="formButton" onClick={onSubmitACB}>Register</button></div>
        <div className="formFieldDiv">
            <span>Have an existing account? </span>
            <Link to="/sign-in">Sign-in</Link>
        </div>
    </div>
</div>
}

export default SignUpView