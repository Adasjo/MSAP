import React from "react"
import "../styles/trackList.css"

function renderArtists(track, redirect) {
    const renderArtist = (artist, opt="") => 
        <span className="trackArtist" key={artist.name} onClick={() => redirect(artist.name)}>{artist.name + opt}</span>

    return <div>
        {track.artists.slice(0, -1).map(artist => renderArtist(artist, ", "))}
        {renderArtist(track.artists.slice(-1)[0])}
    </div>
}

function ContextButton() {
    return <div className="contextButton" onClick={console.log}>
        <div className="buttonDot"/>
        <div className="buttonDot"/>
        <div className="buttonDot"/>
    </div>
}

function TrackList(props) {
    const tracks = props.tracks

    function renderTrack(track) {
        return <li key={track.id}>
            <div className="track">
                <div className="nameAndImage" onClick={console.log}>
                    <img className="trackImage" src={track.album.images.slice(-1)[0].url}/>
                    <span>
                        <span className="trackName">{track.name}</span><br/>
                        {renderArtists(track, props.artistRedirect)}
                    </span>
                </div>
                <ContextButton/>
            </div>
        </li>
    }
    
    return <div className="trackList">
        <ol>{tracks.map(renderTrack)}</ol>
    </div>
}

export default TrackList

export {renderArtists}