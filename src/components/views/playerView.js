import React from 'react'

import ArtistList from "./artistList"

import "../../styles/player.css"

const playButton = require("../../assets/play.svg")
const pauseButton = require("../../assets/pause.svg")
const nextButton = require("../../assets/next.svg")
const prevButton = require("../../assets/prev.svg")

// Help component for player view
function TrackInfo({empty, track, artistRedirect}) {
    if (empty) return <div/>
    return <div>
        <span>{track.name}</span><br/>
        <ArtistList artists={track.artists} redirect={artistRedirect}/>
    </div>
}

// Help component for player view
function CustomSlider(props) {
    return <div className="sliderContainer">
        <input id={props.id} className="slider" type="range" min="0" max="100" {...props}/>
    </div>
}

// Help component for player view
function Center({empty, state, position, duration, seek, previousTrack, nextTrack, togglePlay}) {
    return <div className="center">
        <div className="centerContainer">
            <img className="playerButton" onClick={previousTrack} src={prevButton} style={empty ? {opacity: ".5"} : {}}/>
            {empty || state.paused ? 
                <img className="playerButton" onClick={togglePlay} src={playButton} style={empty ? {opacity: ".5"} : {}}/> :
                <img className="playerButton" onClick={togglePlay} src={pauseButton} style={empty ? {opacity: ".5"} : {}}/>
            }
            <img className="playerButton" onClick={nextTrack} src={nextButton} style={empty ? {opacity: ".5"} : {}} onChange={seek} disabled={empty}/>
        </div>
        <div className="centerContainer">
            <span>{empty ? "-:--" : position}</span>
            <CustomSlider id={"progress"} value={empty ? 0 : Math.round(state.position / state.duration * 100)} onChange={seek} disabled={empty}/>
            <span>{empty ? "-:--" : duration}</span>
        </div>
    </div>
}

// Help component for player view
function Right({empty, volume, changeVolume, onQueueClick}) {
    return <div className="right">
        <button className="queueButton" disabled={empty || !onQueueClick} onClick={onQueueClick}>
            <div/>
            <div/>
            <div/>
        </button>
        <span>Volume</span>
        <CustomSlider id={"volume"} disabled={empty} value={empty ? 0 : volume} onChange={changeVolume}/>
    </div>
}

function PlayerView(props){
    return <div className="player">
        <TrackInfo {...props}/>
        <Center {...props}/>
        <Right {...props}/>
    </div>
}
export default PlayerView