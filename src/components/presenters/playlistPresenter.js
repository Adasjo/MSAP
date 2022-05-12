import React, { useEffect, useState } from "react"
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom"
import { spotifyGet, spotifyPlayTrack, spotifyQueueTrack } from "../../utilities/apiUtils"


import spinner from "../../assets/spinner.gif"
import PlaylistView from "../views/playlistView"
import "../../styles/playlist.css"
import TrackListView from "../views/trackListView"

const limit = 50
function PlaylistPresenter() {
    const [playlist, setPlaylist] = useState()
    const [error, setError] = useState()
    const accessToken = useSelector(state => state.spotify.accessToken)
    const [searchParams, _] = useSearchParams()
    const navigate = useNavigate()
    //INFINITY THINGS
    const [tracks, setTracks] = useState(()=>[])
    const [hasMore, setHasMore] = useState(true)
    const [offset, setOffset] = useState(0)

    function getPlaylist(){
        spotifyGet("/playlists/" + searchParams.get("id"), accessToken)
            .then(res => { 
                setOffset(0);
                getPlaylistTracks();
                setPlaylist(res);
            })
            .catch(setError)
    }
    function getPlaylistTracks(){
        spotifyGet("/playlists/" + searchParams.get("id") + "/tracks?limit=" + limit + "&offset=0", accessToken).then(res => { 
            setTracks([...res.items.map(trackRes => trackRes.track).filter(track => track.track)]);
        }).catch(setError)
    }
    

    function artistRedirect(e, artist) {
        const params = new URLSearchParams({search: artist})
        navigate("/home?" + params) 
        e.stopPropagation()
    }
    useEffect(getPlaylist, [searchParams])
    
    
    function handleScroll() {
        const newOffset = offset + limit
        setOffset(newOffset)
        console.log("FIPPEL", tracks)
        spotifyGet("/playlists/" + searchParams.get("id") + "/tracks?limit=" + limit + "&offset=" + newOffset, accessToken).then(res => {
            const newTracks = [...tracks, ...res.items.map(trackRes => trackRes.track).filter(track => track.track)]
            setTracks([...newTracks])
            setHasMore(res.tracks > 0)
        }).catch(setError)
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

    return <PlaylistView id="scrollableDiv"
        playlistName={playlist.name}
        trackList={<InfiniteScroll 
            dataLength={tracks.length}
            next={handleScroll}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>There is no more songs</b>
                </p>
              }
            scrollableTarget="scrollableDiv"
        >
    <TrackListView
            tracks = {tracks} 
            artistRedirect = {artistRedirect} 
            playTrack = {track => spotifyPlayTrack(accessToken, track.uri)} 
            addToQueue = {uri => spotifyQueueTrack(accessToken, uri)}
        />
    </InfiniteScroll>            
    }
        
    />
}

export default PlaylistPresenter