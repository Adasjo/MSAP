import React, { useEffect } from "react"
import {useState} from "react"
import { useSelector } from "react-redux"
import {spotifyGet, spotifyPlayTrack, spotifyQueueTrack} from '../utilities/apiUtils.js'

import TrackList from "./trackList.js"

import "../styles/search.css"
import { useSearchParams } from "react-router-dom"

const searchOptions = "&type=track&limit=20"
const searchInit = new URLSearchParams({
    search: ""
})

function SearchBar() {
    const [searchResult, setSearchResult] = useState()
    const [error, setError] = useState()
    const accessToken = useSelector(state => state.spotify.accessToken)
    const [searchParams, setSearchParams] = useSearchParams(searchInit)

    let searchText = searchParams.get("search")

    function search() {
        const searchString = "/search?q=$" + searchText.replace(" ", "%20") + searchOptions
        spotifyGet(searchString, accessToken).then(setSearchResult).catch(setError)
    }

    function updateSearchText(string) {
        setSearchParams(new URLSearchParams({search: string}))
    }
    
    function artistRedirect(e, artist) {
        updateSearchText(artist)
        e.stopPropagation()
    }

    useEffect(search, [searchParams])


    function promiseNoData() {
        if (!searchResult) {
            if (!error) {
                return <div>Loading...</div>
            } else {
                return <div>{error}</div>
            }
        }
        return false
    }

    return <div className="searchComponent">
        <div className="searchHeader">
            <input className="searchBar" type="text" placeholder="Search..." onChange={e => updateSearchText(e.target.value)}/>
            <button className="searchButton" onClick={search}>Search</button>
        </div>
        {promiseNoData() ||
        <TrackList tracks={searchResult.tracks.items} artistRedirect={artistRedirect} playTrack={track => spotifyPlayTrack(accessToken, track.uri)} addToQueue={uri => spotifyQueueTrack(accessToken, uri)}/>
        }
    </div>
}


export default SearchBar