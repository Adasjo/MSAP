import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom"
import { spotifyGet, spotifyPlayTrack } from "../utilities/apiUtils"

import TrackList from "./trackList"

import "../styles/playlist.css"

const emptyPlaylist = {
    name: "",
    tracks: {
        items: []
    }
}

function Playlist() {
    const [playlist, setPlaylist] = useState(() => emptyPlaylist)
    const token = useSelector(state => state.spotify.accessToken)
    const [searchParams, _] = useSearchParams()
    const navigate = useNavigate()

    useEffect(() => 
        spotifyGet("/playlists/" + searchParams.get("id"), token)
            .then(setPlaylist)
            .catch(console.log)
        , [searchParams])

    function artistRedirect(artist) {
        const params = new URLSearchParams({search: artist})
        navigate("/home?" + params) 
    }

    const tracks = playlist.tracks.items.map(trackRes => trackRes.track)


    return <div className="playlist">
        <h1 className="playlistHeader">{playlist.name}</h1>
        <TrackList tracks={tracks} artistRedirect={artistRedirect} playTrack={track => spotifyPlayTrack(token, track.uri)}/>
    </div>
}

export default Playlist