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
                <div className="nameAndImage">
                    <img className="trackImage" src={track.album.images[2].url}/>
                    <span>
                        <span className="trackName">{track.name}</span><br/>
                        <span className="trackArtists">{renderArtists(track)}</span>
                    </span>
                </div>
                <audio className="trackPreview" controls name="media">
                    <source src={track.preview_url} type="audio/mpeg"/>
                </audio>
            </div>
        </li>
    }
    
    return <div className="trackList">
        <ol>{tracks.map(renderTrack)}</ol>
    </div>
}

export default TrackList

export {renderArtists}