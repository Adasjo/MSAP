import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { spotifyGet } from "../utilities/apiUtils"

function Playlist() {
    const [playlist, setPlaylist] = useState()
    const token = useSelector(state => state.spotify.accessToken)
    const [searchParams, _setSearchParams] = useSearchParams()

    useEffect(() => spotifyGet("/playlists/" + searchParams.get("id"), token).then(setPlaylist).catch(console.log), [searchParams])
    
    return <div>
        Playlist component!
    </div> 
}

export default Playlist