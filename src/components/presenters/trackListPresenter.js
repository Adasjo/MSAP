import React from "react"
import "../../styles/trackList.css"
import TrackListView from "../views/trackListView"

/*
*   Render the artists of a track. 
*   The redirect argument should be a function that when called, redirects the user to the artist.
*/
function renderArtists(track, redirect) {
    const renderArtist = (artist, opt="") => 
        <span className="trackArtist" key={artist.name} onClick={e => redirect(e, artist.name)}>{artist.name + opt}</span>

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

function TrackListPresenter(props){
    const tracksList = props.tracks

    function renderTrack(track, i) {
        return <li key={track.id}>
            <div className="track" onClick={() => props.playTrack(track)}>
                <div className="nameAndImage">
                    <div className="trackPrefix">
                        <span className="resultNo">{i+1}</span>
                        <img className="trackPlayIcon" src={require("../../assets/play.svg")}/>
                    </div>
                    <img className="trackImage" src={track.album.images.slice(-1)[0].url}/>
                    <span>
                        <span className="trackName">{track.name}</span><br/>
                        {renderArtists(track, props.artistRedirect)}
                    </span>
                </div>
                <button onClick={e => { e.stopPropagation(); props.addToQueue(track.uri)}}>Add To Queue</button>
            </div>
            
        </li>
    }
    
    return <TrackListView
            renderTrack = {renderTrack}
            tracksList = {tracksList}/>
}

export default TrackListPresenter;