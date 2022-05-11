import TrackListPresenter from "../presenters/trackListPresenter"
import React from "react"
function PlaylistView(props){
    return <div className="playlist">
        <h1 className="playlistHeader">{props.playlist.name}</h1>
        <TrackListPresenter 
            tracks={props.tracks} 
            artistRedirect={props.artistRedirect} 
            playTrack={props.playTrack}
            addToQueue={props.addToQueue}
        />
    </div> 
}
export default PlaylistView