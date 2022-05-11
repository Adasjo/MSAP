import React from "react"
import { useSelector } from "react-redux"
import "../../styles/queue.css"
import TrackListView from "../views/trackListView"

function removeDupes(array) {
    return array.filter((a, index) => 
        index == array.findIndex(b => b.id == a.id)
    )
}

function QueuePresenter() {
    const queue = useSelector(state => state.spotify.currentState.track_window.next_tracks)
    return <div className="queue">
        <TrackListView tracks={removeDupes(queue)}/>
    </div>
}

export default QueuePresenter