import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom"
import { spotifyGet, spotifyPlayTrack, spotifyQueueTrack } from "../../utilities/apiUtils"


import spinner from "../../assets/spinner.gif"
import PlaylistView from "../views/playlistView"
import "../../styles/playlist.css"
import TrackListView from "../views/trackListView"


function PlaylistPresenter() {
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

    function artistRedirect(e, artist) {
        const params = new URLSearchParams({search: artist})
        navigate("/home?" + params) 
        e.stopPropagation()
    }

    if (!playlist) {
        if (searchParams.get("id") && !error) {
            return <div className="playlist"><img src={spinner}/></div>
        } else if (error) {
            return <div>{error}</div>
        } else {
            return <div>No data</div>
        }
        
    }

    const tracks = playlist.tracks.items.map(trackRes => trackRes.track).filter(track => track.track)

    return <PlaylistView
        playlistName={playlist.name}
        trackList={<TrackListView
            tracks={tracks} 
            artistRedirect={artistRedirect} 
            playTrack={track => spotifyPlayTrack(token, track.uri)}
            addToQueue={uri => spotifyQueueTrack(token, uri)}
        />}
        
    />
}

export default PlaylistPresenter