import React from "react"
import {useState} from "react"
import { useSelector } from "react-redux"
import {spotifyGet} from '../utilities/apiUtils.js'


const initRes = {tracks: {items: []}}


function SearchBar() {
    const [response, setResponse] = useState(() => initRes);
    const accesstoken = useSelector(state => state.spotify.accessToken)
    const [search, setSearch] = useState(() => "");

    function searchCB (){
        const searcher = search.replace(" ", "%20");
        const searchString = "/search?q=$" + searcher + "&type=track&limit=10" 
        spotifyGet(searchString, accesstoken).then(setResponse);
    }
    
    const trackmap = response.tracks.items.map(trackRes => 
        <li key={trackRes.id}>
            <div style={{margin: "30px", minWidth: "30px", minHeight: "30px", display: "flex", justifyContent: "left"}}><img src={trackRes.album.images[2].url}></img>
                {trackRes.name}
                    <audio style={{alignItems: "center", padding: "10px"}} controls name="media">
                        <source src={trackRes.preview_url} type="audio/mpeg"/>
                    </audio>
                </div>
        </li>);
        console.log(trackmap);
    return <div style={{ height: "auto", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{margin: "1em"}}>Search for a track:</h1>
        <input style={{margin: "1em"}} id="searchText" type="text" placeholder="Search here" onChange={e => setSearch(e.target.value)}/>
        <div><ol>{trackmap}</ol></div>
        <button style={{minWidth: "30px", minHeight: "30px", display: "flex", justifyContent: "center"}}onClick={searchCB}>Search</button>
    </div>
}


export default SearchBar