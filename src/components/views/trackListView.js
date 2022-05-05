import React from "react"
import "../../styles/trackList.css"


function TrackListView(props){
    return <div className="trackList">
        <ul>{props.tracksList.map(props.renderTrack)}</ul>
    </div>
}

export default TrackListView