import React from "react"
import { Link} from "react-router-dom"

function SignInView(props){

    return <div className="authPage">
        <div className="authBox">
            <h3>Welcome back!</h3>
            <div className="formFieldDiv">
                <label htmlFor="email">Email</label><br></br>
                <input className="formField" type="email" onChange={e => props.setEmail(e.target.value)}></input>
            </div>
            <div className="formFieldDiv">
                <label htmlFor="pw">Password</label>
                <input className="formField" type="password" onChange={e => props.setPW(e.target.value)}></input>
                <a onClick={props.resetPW} style={{cursor:"pointer"}}>Forgot password?</a>
                {props.error ? <div className="error">{props.error}</div> : ""}
                {props.message ? <div>{props.message}</div> : ""}
            </div>
            <div className="formFieldDiv"><button className="formButton" onClick={props.onSubmit}>Sign-in</button></div>
            <div className="formFieldDiv">
                <span>Need an account? </span>
                <Link to="/register">Register</Link>
            </div>
        </div>
    </div>
}

export default SignInView