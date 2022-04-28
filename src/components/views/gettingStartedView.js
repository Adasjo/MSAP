import React from "react"
    function GettingStartedView(props) {
        function autorizeACB(){
            props.autorize();
        }
    return <div>
            <div>
                Hi, we see that this is your first time using MSAP! To get started link your MSAP account to one of the available streaming plattforms below:
            </div>
            <button onClick={autorizeACB} disabled={props.state.spotify.accessToken}>Spotify</button>
        </div>
    }
    
    export default GettingStartedView