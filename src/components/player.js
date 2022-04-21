import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { initSpotifyPlayerSDK, spotifyTransferPlayBack } from "../utilities/apiUtils"
import { renderArtists } from "./trackList"

import "../styles/player.css"
import "../styles/trackList.css"

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

            player.addListener("player_state_changed", newState => setState({...newState}))
            
            player.connect()
        }
    }, [player])

    // Update player every second
    useEffect(async () => {
        if (player && state) {
            await new Promise(r => setTimeout(r, 1000))
            const state = await player.getCurrentState()
            setState({...state})
        }
    }, [state])

    if (!player || !state) {
        return null
    }

    function seek(proc) {
        const newPos = proc / 100 * state.duration 
        player.seek(newPos)
    }

    const track = state.track_window.current_track

    const duration = formatDuration(state.duration)
    const position = formatDuration(state.position)
    
    return <div className="player">
        <div>
            <span className="trackName">{track.name}</span><br/>
            <span className="trackArtists">{renderArtists(track)}</span>
        </div>
        <div className="center">
            <div className="centerContainer">
                <button className="playerButton" onClick={() => {console.log("prev");player.previousTrack()}}>Prev</button>
                {state.paused ? 
                    <button className="playerButton" onClick={() => player.togglePlay()} disabled={!ready}>Play</button> :
                    <button className="playerButton" onClick={() => player.togglePlay()} disabled={!ready}>Pause</button> 
                }
                <button className="playerButton" onClick={() => player.nextTrack()}>Next</button>
            </div>
            <div className="centerContainer">
                <div>{position}</div>
                <div className="playbarContainer">
                    <input className="playbar" type="range" min="0" max="100" value={Math.round(state.position / state.duration * 100)} onChange={e => seek(e.target.value)}/>
                </div>
                <span>{duration}</span>
            </div>
        </div>
        
    </div>
}

export default Player