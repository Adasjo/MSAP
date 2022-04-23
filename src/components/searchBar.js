import React, { useEffect } from "react"
import {useState} from "react"
import { useSelector } from "react-redux"
import {spotifyGet} from '../utilities/apiUtils.js'

import TrackList from "./trackList.js"

import "../styles/search.css"
import { useSearchParams } from "react-router-dom"

const initRes = {tracks: {items: []}}
const searchOptions = "&type=track&limit=20"
const searchInit = new URLSearchParams({
    search: ""
})

function SearchBar() {
    const [searchResult, setSearchResult] = useState(() => initRes)
    const accesstoken = useSelector(state => state.spotify.accessToken)
    const [searchParams, setSearchParams] = useSearchParams(searchInit)

    let searchText = searchParams.get("search")

    function search() {
        const searchString = "/search?q=$" + searchText.replace(" ", "%20") + searchOptions
        spotifyGet(searchString, accesstoken).then(setSearchResult)
    }

    function updateSearchText(string) {
        setSearchParams(new URLSearchParams({search: string}))
    }
    
    useEffect(search, [searchParams])

    return <div className="searchComponent">
        <div className="searchHeader">
            <input className="searchBar" type="text" placeholder="Search..." onChange={e => updateSearchText(e.target.value)}/>
            <button className="searchButton" onClick={search}>Search</button>
        </div>
        <TrackList tracks={searchResult.tracks.items} onClick={updateSearchText}/>
    </div>
}


export default SearchBar