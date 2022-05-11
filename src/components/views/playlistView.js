import React from "react"


function PlaylistView({playlistName, trackList}){
    return <div className="playlist">
        <h1 className="playlistHeader">{playlistName}</h1>
        {trackList}
    </div> 
}
export default PlaylistView