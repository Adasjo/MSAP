import React from "react"

import spinner from "../../assets/spinner.gif"

function SearchbarView({updateSearchText, loading, trackListElement}) {
    return <div className="searchComponent" id="scrollableDiv">
        <div className="searchHeader">
            <input className="searchBar" type="text" placeholder="Search..." onChange={e => updateSearchText(e.target.value)}/>
            {loading ? <img src={spinner}/> : ""}
        </div>
        {trackListElement}
    </div>
}
export default SearchbarView