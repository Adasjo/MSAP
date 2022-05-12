import React, { useEffect, useState } from "react"
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { spotifyGet, spotifyPlayTrack, spotifyQueueTrack } from '../../utilities/apiUtils'
import { debounce } from "../../utilities/utils"

import "../../styles/search.css"

import SearchbarView from "../views/searchbarView"
import TrackListView from "../views/trackListView"


import spinner from "../../assets/spinner.gif"

const limit = 40
const searchOptions = "&type=track&limit=" + limit
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
    const [hasMore, setHasMore] = useState(true)
    const [offset, setOffset] = useState(0)

    let searchText = searchParams.get("search")

    async function search() {
        const searchString = "/search?q=$" + searchText.replace(" ", "%20") + "&offset=0" + searchOptions
        setLoading(true)
        spotifyGet(searchString, accessToken).then(res => {
            setOffset(0)
            setTracks([...res.tracks.items]);
            setSearchResult(res);
            setLoading(false)
        }).catch(setError)
              
    }

    const setSearchDebounced = debounce(setSearchParams, DEBOUNCE_TIMEOUT)

    function updateSearchText(string) {
        setSearchDebounced(new URLSearchParams({search: string}))
    }
    
    function artistRedirect(e, artist) {
        updateSearchText(artist)
        e.stopPropagation()
    }

    useEffect(search, [searchParams])

    function handleScroll() {
        const newOffset = offset + limit
        const searchString = "/search?q=$" + searchText.replace(" ", "%20") + "&offset=" + newOffset + searchOptions
        setLoading(true)
        setOffset(newOffset)
        spotifyGet(searchString, accessToken).then(res => {
            const newTracks = [...tracks, ...res.tracks.items]
            setHasMore(res.tracks.items.length > 0)
            setTracks([...newTracks])
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


export default SearchbarPresenter