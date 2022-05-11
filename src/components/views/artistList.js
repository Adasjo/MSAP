import React from "react"

/*
*   Render a list of artists. 
*   The redirect argument should be a function that when called, redirects the user to the artist.
*/
function ArtistList({artists, redirect}) {
    const renderArtist = (artist, opt="") => 
        <span className="trackArtist" key={artist.name} onClick={e => redirect(e, artist.name)}>{artist.name + opt}</span>

    return <div>
        {artists.slice(0, -1).map(artist => renderArtist(artist, ", "))}
        {renderArtist(artists.slice(-1)[0])}
    </div>
}

export default ArtistList