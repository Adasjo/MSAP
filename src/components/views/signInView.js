import React from "react"
import { Link} from "react-router-dom"

function SignInView(props){

    function setEmailACB(email){
        props.setEmail(email);
    }
    function setPWACB(PW){
        props.setPW(PW);
    }
    function onSubmitACB(){
        props.onSubmit();
    }
    function resetPWACB(){
        props.reset();
    }

    return <div className="authPage">
        <div className="authBox">
            <h3>Welcome back!</h3>
            <div className="formFieldDiv">
                <label htmlFor="email">Email</label><br></br>
                <input className="formField" type="email" onChange={e => setEmailACB(e.target.value)}></input>
            </div>
            <div className="formFieldDiv">
                <label htmlFor="pw">Password</label>
                <input className="formField" type="password" onChange={e => setPWACB(e.target.value)}></input>
                <a onClick={resetPWACB} style={{cursor:"pointer"}}>Forgot password?</a>
                {props.error ? <div className="error">{props.error}</div> : ""}
                {props.message ? <div>{props.message}</div> : ""}
            </div>
            <div className="formFieldDiv"><button className="formButton" onClick={onSubmitACB}>Sign-in</button></div>
            <div className="formFieldDiv">
                <span>Need an account? </span>
                <Link to="/register">Register</Link>
            </div>
        </div>
    </div>
}

export default SignInView