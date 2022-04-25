import React from "react"
import "../styles/trackList.css"
import { spotifyQueueTrack } from "../utilities/apiUtils"

/*
*   Render the artists of a track. 
*   The redirect argument should be a function that when called, redirects the user to the artist.
*/
function renderArtists(track, redirect) {
    const renderArtist = (artist, opt="") => 
        <span className="trackArtist" key={artist.name} onClick={() => redirect(artist.name)}>{artist.name + opt}</span>

    return <div>
        {track.artists.slice(0, -1).map(artist => renderArtist(artist, ", "))}
        {renderArtist(track.artists.slice(-1)[0])}
    </div>
}

/*
*   Context button.
*   This should probably be moved to its own file if expanded upon.
*/
function ContextButton(props) {
    return <label className="contextButton">
        <input type="checkbox"/>
        <div className="dropdown">
            <button onClick={props.addToQueue}>Add to queue</button>
        </div>
        <div className="buttonDot"/>
        <div className="buttonDot"/>
        <div className="buttonDot"/>
    </label>
}

function TrackList(props) {
    const tracks = props.tracks

    function renderTrack(track) {
        return <li key={track.id}>
            <div className="track">
                <div className="nameAndImage">
                    <img className="trackImage" src={track.album.images.slice(-1)[0].url} onClick={() => props.playTrack(track)}/>
                    <span>
                        <span className="trackName" onClick={() => props.playTrack(track)}>{track.name}</span><br/>
                        {renderArtists(track, props.artistRedirect)}
                    </span>
                </div>
                <button onClick={() => props.addToQueue(track.uri)}>Add To Queue</button>
            </div>
        </li>
    }
    
    return <div className="trackList">
        <ol>{tracks.map(renderTrack)}</ol>
    </div>
}

export default TrackList

export {renderArtists}