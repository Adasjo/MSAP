import React from "react"

import ArtistList from "./artistList"
import "../../styles/trackList.css"

import playButton from "../../assets/play.svg"

function TrackListView({tracks, playTrack, artistRedirect, addToQueue}){

    function renderTrack(track, i) {
        return <li key={track.id}>
            <div className="track" onClick={() => playTrack(track)}>
                <div className="nameAndImage">
                    <div className="trackPrefix">
                        <span className="resultNo">{i+1}</span>
                        <img className="trackPlayIcon" src={playButton}/>
                    </div>
                    <img className="trackImage" src={track.album.images.slice(-1)[0].url}/>
                    <span>
                        <span className="trackName">{track.name}</span><br/>
                        <ArtistList artists={track.artists} redirect={artistRedirect}/>
                    </span>
                </div>
                <button onClick={e => { e.stopPropagation(); addToQueue(track.uri)}}>Add To Queue</button>
            </div>
            
        </li>
    }

    return <div className="trackList">
        <ul>{tracks.map(renderTrack)}</ul>
    </div>
}

export default TrackListView