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

const searchOptions = "&type=track&limit=20&offset=0"
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

    let searchText = searchParams.get("search")

    function search() {
        const searchString = "/search?q=$" + searchText.replace(" ", "%20") + searchOptions
        setLoading(true)
        spotifyGet(searchString, accessToken).then(res => {
            setSearchResult(res)
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
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      function handleScroll() {
        console.log('Scrolling hell');
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        console.log('Fetch more list items!');
      }

    function promiseNoData() {
        if (error) {
            return <div>{error}</div>
        } else if (!searchResult) {
            return <img src={spinner}/>
        }
        return false
    }
    console.log("START");
    console.log(searchResult);
    console.log("END")
    return <SearchbarView
        updateSearchText = {updateSearchText}
        loading = {loading}
        trackListElement = {
            promiseNoData() ||
            <InfiniteScroll 
                dataLength={searchResult.tracks.items.length}
                next={handleScroll}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            
            >{searchResult.tracks.items}</InfiniteScroll>            
        }
    />
}


export default SearchbarPresenter