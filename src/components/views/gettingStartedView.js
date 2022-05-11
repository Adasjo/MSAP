import React from "react"
import "../../styles/gettingStarted.css"

function GettingStartedView(props) {
    return <div className="gettingStarted">
        <div>
            <h1>Welcome!</h1>
            <div>
                Hi, we see that this is your first time using MSAP! 
                To get started, link your MSAP account to one of the available streaming plattforms below:
            </div>
            <button onClick={props.autorize} disabled={props.accessToken}>Spotify</button>
        </div>
    </div>
}
    
export default GettingStartedView