import React from "react"
import { useSelector } from "react-redux"
import { spotifySlice } from "../reducers/spotifyReducer.js";
import {spotifyGet} from '../utilities/apiUtils.js'




function getSearchList(){
    const token = useSelector(state => state.spotify);
    search = spotifyGet("/search", token.accessToken);
    console.log(search);
}

function SearchBar() {
    getSearchList();
    console.log("123456");
    console.log(token);
    
    return <div style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h1>Här nedanför borde en sökruta finnas</h1>
        <input id="searchText" type="text" placeholder="Search here" onChange={() => {
            console.log(document.getElementById("searchText").value)
        }} />
    </div>
}


export default SearchBar