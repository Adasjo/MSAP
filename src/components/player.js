import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { initSpotifyPlayerSDK, spotifyPlayTrack, spotifyTransferPlayBack } from "../utilities/apiUtils"
import { renderArtists } from "./trackList"

import "../styles/player.css"

const playButton = require("../assets/play.svg")
const pauseButton = require("../assets/pause.svg")
const nextButton = require("../assets/next.svg")
const prevButton = require("../assets/prev.svg")

/*
*   Helper function to convert milliseconds to "minutes:seconds" format
*/
function formatDuration(millis) {
    const date = new Date(millis)
    const seconds = date.getSeconds()
    return date.getMinutes() + ":" + (seconds < 10 ? "0" : "") + seconds
}

function Player() {
    const dispatch = useDispatch()
    const accessToken = useSelector(state => state.spotify.accessToken)
    const player = useSelector(state => state.spotify.player)
    const [ready, setReady] = useState()
    const [volume, setVolume] = useState(50)
    const [state, setState] = useState()

    // Initialize a new spotify Web SDK player
    useEffect(() => {
        if (accessToken)
            dispatch(initSpotifyPlayerSDK())
    }, [accessToken])

    // If the player is initialized, add event listeners and connect the player
    useEffect(() => {
        if (player) {
            player.addListener("ready", ({device_id}) => {
                spotifyTransferPlayBack(accessToken, device_id)
                setReady(true)
            })

            player.addListener("not_ready", _ => {
                setReady(false)
            })

            player.addListener("player_state_changed", newState => {
                dispatch({type: "spotify/updateState", payload: newState})
                setState({...newState})
            })

            player.connect()
        }
    }, [player])

    // Update player every second
    useEffect(async () => {
        if (player && state && ready) {
            await new Promise(r => setTimeout(r, 1000))
            const state = await player.getCurrentState()
            setState({...state})
        }
    }, [state])
    
    if (!player || !state) {
        return null
    }

    // Seek in the current track
    function seek(e) {
        const proc = e.target.value
        const newPos = proc / 100 * state.duration 
        player.seek(newPos)
    }

    function changeVolume(e) {
        const proc = e.target.value
        player.setVolume(proc/100)
        setVolume(proc)
    }

    const track = state.track_window.current_track

    const duration = formatDuration(state.duration)
    const position = formatDuration(state.position)
    
    return <div className="player">
        <div>
            <span>{track.name}</span><br/>
            {renderArtists(track, track => spotifyPlayTrack(accessToken, track.uri))}
        </div>
        <div className="center">
            <div className="centerContainer">
                <img className="playerButton" onClick={() => player.previousTrack()} src={prevButton} style={{height: "1rem"}}/>
                {state.paused ? 
                    <img className="playerButton" onClick={() => player.togglePlay()} disabled={!ready} src={playButton}/> :
                    <img className="playerButton" onClick={() => player.togglePlay()} disabled={!ready} src={pauseButton}/>
                }
                <img className="playerButton" onClick={() => player.nextTrack()} src={nextButton} style={{height: "1rem"}}/>
            </div>
            <div className="centerContainer">
                <span>{position}</span>
                <div className="sliderContainer">
                    <input className="slider" type="range" min="0" max="100" value={Math.round(state.position / state.duration * 100)} onChange={seek}/>
                </div>
                <span>{duration}</span>
            </div>
        </div>
        <div className="right">
            <span>Volume</span>
            <div className="sliderContainer">
                <input className="slider" type="range" min="0" max="100" value={volume} onChange={changeVolume} />
            </div>
        </div>
    </div>
}

export default Player