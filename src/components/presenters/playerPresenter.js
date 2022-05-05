import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { initSpotifyPlayerSDK, spotifyTransferPlayBack } from "../../utilities/apiUtils"

import PlayerView from "../views/playerView"

import "../../styles/player.css"



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
    
    return <PlayerView
        track = {track}
        duration = {duration}
        position = {position}
        volume = {volume}
        seek = {seek}
        changeVolume = {changeVolume}
        state = {state}
        ready = {ready}
        player = {player}
    />
}

export default PlayerPresenter