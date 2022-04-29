import React from "react"

function GettingStartedView(props) {
    return <div>
        <div>
            Hi, we see that this is your first time using MSAP! To get started link your MSAP account to one of the available streaming plattforms below:
        </div>
        <button onClick={props.autorize} disabled={props.accessToken}>Spotify</button>
    </div>
}
    
export default GettingStartedView