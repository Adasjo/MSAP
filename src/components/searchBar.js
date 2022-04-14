import React from "react"
import {useState} from "react"
import { useSelector } from "react-redux"
import {spotifyGet} from '../utilities/apiUtils.js'

import TrackList from "./trackList.js"

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
    
    return <div style={{ height: "auto", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{margin: "1em"}}>Search for a track:</h1>
        <input style={{margin: "1em"}} id="searchText" type="text" placeholder="Search here" onChange={e => setSearchText(e.target.value)}/>
        <button style={{minWidth: "30px", minHeight: "30px", display: "flex", justifyContent: "center"}}onClick={searchCB}>Search</button>
        <TrackList tracks={searchResult.tracks.items}/>
    </div>
}


export default SearchBar