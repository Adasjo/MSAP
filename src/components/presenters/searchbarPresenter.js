import React, { useEffect, useState } from "react"
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { spotifyGet, spotifyPlayTrack, spotifyQueueTrack } from '../../utilities/apiUtils'
import { debounce } from "../../utilities/utils"
import ArtistList from "../views/artistList"


import "../../styles/search.css"

import SearchbarView from "../views/searchbarView"
import TrackListView from "../views/trackListView"


import spinner from "../../assets/spinner.gif"

let offset = 0;
const limit = 20;
let searchOptions = "&type=track&limit=" + limit.toString() + "&offset=" + offset.toString();
const searchInit = new URLSearchParams({
    search: ""
})
const DEBOUNCE_TIMEOUT = 600

function SearchbarPresenter() {
    const [searchResult, setSearchResult] = useState()
    const [error, setError] = useState()
    const accessToken = useSelector(state => state.spotify.accessToken)
    const [searchParams, setSearchParams] = useSearchParams(searchInit)
    const [loading, setLoading] = useState()
    const [tracks, setTracks] = useState()

    let searchText = searchParams.get("search")

    async function search() {
        const searchString = "/search?q=$" + searchText.replace(" ", "%20") + searchOptions
        setLoading(true)
        spotifyGet(searchString, accessToken).then(res => {
            setTracks(res.tracks.items);
            setSearchResult(res);
            setLoading(false)
        }).catch(setError)
              
    }

    const setSearchDebounced = debounce(setSearchParams, DEBOUNCE_TIMEOUT)

    function updateSearchText(string) {
        setSearchDebounced(new URLSearchParams({search: string}))
        setTracks([]);
    }
    
    function artistRedirect(e, artist) {
        updateSearchText(artist)
        e.stopPropagation()
    }

    useEffect(search, [searchParams])
    const handleScroll = () => {
        offset = offset + limit;
        searchOptions = "&type=track&limit=" + limit.toString() + "&offset=" + offset.toString();
        const searchString = "/search?q=$" + searchText.replace(" ", "%20") + searchOptions
        setLoading(true)
        spotifyGet(searchString, accessToken).then(res => {
            let tempTracks = tracks;
            res.tracks.items.forEach(e => tempTracks.push(e));
            setTracks(tempTracks)
            setLoading(false)
        }).catch(setError)
    }

    function promiseNoData() {
        if (error) {
            return <div>{error}</div>
        } else if (!searchResult) {
            return <img src={spinner}/>
        }
        return false
    }
    
    return <SearchbarView id="scrollableDiv"
        updateSearchText = {updateSearchText}
        loading = {loading}
        trackListElement = {
            promiseNoData() ||
            <InfiniteScroll 
                dataLength={tracks.length}
                next={handleScroll}
                hasMore={true}
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


export default SearchbarPresenter