import React from "react"
import {useState} from "react"
import { useSelector } from "react-redux"
import {spotifyGet} from '../utilities/apiUtils.js'

import TrackList from "./trackList.js"

import "../styles/search.css"

const initRes = {tracks: {items: []}}


function SearchBar() {
    const [searchResult, setSearchResult] = useState(() => initRes);
    const accesstoken = useSelector(state => state.spotify.accessToken)
    const [searchText, setSearchText] = useState(() => "");

    function searchCB (){
        const searcher = searchText.replace(" ", "%20");
        const searchString = "/search?q=$" + searcher + "&type=track&limit=10" 
        spotifyGet(searchString, accesstoken).then(setSearchResult);
    }
    
    return <div className="searchComponent">
        <div className="searchHeader">
            <input className="searchBar" type="text" placeholder="Search..." onChange={e => setSearchText(e.target.value)}/>
            <button className="searchButton" onClick={searchCB}>Search</button>
        </div>
        <TrackList tracks={searchResult.tracks.items}/>
    </div>
}


export default SearchBar