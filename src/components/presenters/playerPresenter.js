import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { initSpotifyPlayerSDK, spotifyTransferPlayBack } from "../../utilities/apiUtils"

import PlayerView from "../views/playerView"

import "../../styles/player.css"
import { useNavigate } from "react-router-dom"



/*
*   Helper function to convert milliseconds to "minutes:seconds" format
*/
function formatDuration(millis) {
    const date = new Date(millis)
    const seconds = date.getSeconds()
    return date.getMinutes() + ":" + (seconds < 10 ? "0" : "") + seconds
}

function PlayerPresenter() {
    const dispatch = useDispatch()
    const accessToken = useSelector(state => state.spotify.accessToken)
    const player = useSelector(state => state.spotify.player)
    const [ready, setReady] = useState()
    const [volume, setVolume] = useState(50)
    const [state, setState] = useState()
    const navigate = useNavigate()

    /*
    *   The lifecycle of the player.
    *   On mount, initialize the Spotify web SDK
    *   On dismount, disconnect the player
    */
    useEffect(() => {
        dispatch(initSpotifyPlayerSDK({
            "ready": ({device_id}) => {
                setReady(true)
                setTimeout(() => spotifyTransferPlayBack(accessToken, device_id), 300)
            },
            "not_ready": _ => setReady(false),
            "player_state_changed": newState => {
                dispatch({type: "spotify/updateState", payload: newState})
                setState({...newState})
            }
        }))
        return () => {if (player) player.disconnect()}
    }, [])

    //Update player every second  
    useEffect(() => {
        const interval = setInterval(async () => {
            if (player && ready && !state.paused) {
                const newState = await player.getCurrentState()
                setState({...newState})
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [state])

    //Return empty "player" if not loaded
    if (!player || !state) {
        return <PlayerView empty={true}/>
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

    function artistRedirect(e, artist) {
        const params = new URLSearchParams({search: artist})
        navigate("/home?" + params) 
    }
    
    const track = state.track_window.current_track
    const duration = formatDuration(state.duration)
    const position = formatDuration(state.position)

    return <PlayerView
        track = {track}
        duration = {duration}
        position = {position}
        volume = {volume}
        seek = {seek}
        changeVolume = {changeVolume}
        state = {state}
        previousTrack = {() => player.previousTrack()}
        nextTrack = {() => player.nextTrack()}
        togglePlay = {() => player.togglePlay()}
        onQueueClick = {window.location.pathname != "/home/queue" ? () => navigate("/home/queue") : null}
        artistRedirect = {artistRedirect}
    />
}

export default PlayerPresenter