import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { spotifyGet } from "../utilities/apiUtils"

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

    useEffect(() => spotifyGet("/playlists/" + searchParams.get("id"), token).then(setPlaylist).catch(console.log), [searchParams])

    const trackList = playlist.tracks.items.map(trackRes => trackRes.track).map(track =>
        <li key={track.id}>
            <div style={{margin: "30px", minWidth: "30px", minHeight: "30px", display: "flex", justifyContent: "left"}}>
                <img src={track.album.images[2].url}></img>
                {track.name}
                    <audio style={{alignItems: "center", padding: "10px"}} controls name="media">
                        <source src={track.preview_url} type="audio/mpeg"/>
                    </audio>
                </div>
        </li>);

    return <div>
        <h1 style={{margin: "1em"}}>{playlist.name}</h1>
        <div><ol>{trackList}</ol></div>
    </div>
}

export default Playlist