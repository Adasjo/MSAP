import React from "react"
import "../styles/trackList.css"

function renderArtists(track, onClick) {
    const renderArtist = artist => 
        <span className="trackArtist" key={artist.name} onClick={() => onClick(artist.name)}>{artist.name + ", "}</span>

    return <div>
        {track.artists.slice(0, -1).map(renderArtist)}
        {renderArtist(track.artists.slice(-1)[0])}
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
                        {renderArtists(track, props.onClick)}
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