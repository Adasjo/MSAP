import React from 'react'
import { renderArtists } from "../trackList" //This line need changes
const playButton = require("../../assets/play.svg")
const pauseButton = require("../../assets/pause.svg")
const nextButton = require("../../assets/next.svg")
const prevButton = require("../../assets/prev.svg")
import "../../styles/player.css"

function PlayerView(props){

    return <div className="player">
        <div>
            <span>{props.track.name}</span><br/>
            {renderArtists(props.track, track => spotifyPlayTrack(accessToken, track.uri))}
        </div>
        <div className="center">
            <div className="centerContainer">
                <img className="playerButton" onClick={() => props.player.previousTrack()} src={prevButton} style={{height: "1rem"}}/>
                {props.state.paused ? 
                    <img className="playerButton" onClick={() => props.player.togglePlay()} disabled={!props.ready} src={playButton}/> :
                    <img className="playerButton" onClick={() => props.player.togglePlay()} disabled={!props.ready} src={pauseButton}/>
                }
                <img className="playerButton" onClick={() => props.player.nextTrack()} src={nextButton} style={{height: "1rem"}}/>
            </div>
            <div className="centerContainer">
                <span>{props.position}</span>
                <div className="sliderContainer">
                    <input className="slider" type="range" min="0" max="100" value={Math.round(props.state.position / props.state.duration * 100)} onChange={props.seek}/>
                </div>
                <span>{props.duration}</span>
            </div>
        </div>
        <div className="right">
            <span>Volume</span>
            <div className="sliderContainer">
                <input className="slider" type="range" min="0" max="100" value={props.volume} onChange={props.changeVolume} />
            </div>
        </div>
    </div>
}
export default PlayerView