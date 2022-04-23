import React from "react"
import "../styles/trackList.css"

function renderArtists(track) {
    const names = track.artists.map(artist => artist.name)
    return names.join(", ")
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
                        <span className="trackArtists">{renderArtists(track)}</span>
                    </span>
                </div>
                <div className="contextButton" onClick={console.log}>
                    <div className="buttonDot"/>
                    <div className="buttonDot"/>
                    <div className="buttonDot"/>
                </div>
            </div>
        </li>
    }
    
    return <div className="trackList">
        <ol>{tracks.map(renderTrack)}</ol>
    </div>
}

export default TrackList

export {renderArtists}