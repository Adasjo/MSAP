import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { spotifyGet } from "../utilities/apiUtils"

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
    const [searchParams, _setSearchParams] = useSearchParams()

    useEffect(() => 
        spotifyGet("/playlists/" + searchParams.get("id"), token)
            .then(setPlaylist)
            .catch(console.log)
        , [searchParams])

    return <div className="playlist">
        <h1 className="playlistHeader">{playlist.name}</h1>
        <TrackList tracks={playlist.tracks.items.map(trackRes => trackRes.track)}/>
    </div>
}

export default Playlist