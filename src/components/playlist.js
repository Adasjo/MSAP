import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom"
import { spotifyGet, spotifyPlayTrack } from "../utilities/apiUtils"

import TrackList from "./trackList"

import "../styles/playlist.css"

function Playlist() {
    const [playlist, setPlaylist] = useState()
    const [error, setError] = useState()
    const token = useSelector(state => state.spotify.accessToken)
    const [searchParams, _] = useSearchParams()
    const navigate = useNavigate()

    useEffect(() => {
        spotifyGet("/playlists/" + searchParams.get("id"), token)
            .then(setPlaylist)
            .catch(setError)
    }, [searchParams])

    function artistRedirect(artist) {
        const params = new URLSearchParams({search: artist})
        navigate("/home?" + params) 
    }

    if (!playlist) {
        if (searchParams.get("id") && !error) {
            return <div>Loading...</div>
        } else if (error) {
            return <div>{error}</div>
        } else {
            return <div>No data</div>
        }
        
    }

    return <div className="playlist">
        <h1 className="playlistHeader">{playlist.name}</h1>
        <TrackList tracks={playlist.tracks.items.map(trackRes => trackRes.track)} artistRedirect={artistRedirect} playTrack={track => spotifyPlayTrack(token, track.uri)}/>
    </div> 
}

export default Playlist