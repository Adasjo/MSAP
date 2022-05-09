import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { spotifyGet, spotifyPlayTrack, spotifyQueueTrack } from '../../utilities/apiUtils'

import "../../styles/search.css"

import SearchbarView from "../views/searchbarView"
import TrackListPresenter from "./trackListPresenter"

import spinner from "../../assets/spinner.gif"

const searchOptions = "&type=track&limit=20"
const searchInit = new URLSearchParams({
    search: ""
})

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

    function updateSearchText(string) {
        setSearchParams(new URLSearchParams({search: string}))
    }
    
    function artistRedirect(e, artist) {
        updateSearchText(artist)
        e.stopPropagation()
    }

    useEffect(search, [searchParams])


    function promiseNoData() {
        if (error) {
            return <div>{error}</div>
        } else if (!searchResult) {
            return <img src={spinner}/>
        }
        return false
    }

    return <SearchbarView
        updateSearchText = {updateSearchText}
        loading = {loading}
        trackListElement = {
            promiseNoData() ||
            <TrackListPresenter 
                tracks = {searchResult.tracks.items} 
                artistRedirect = {artistRedirect} 
                playTrack = {track => spotifyPlayTrack(accessToken, track.uri)} 
                addToQueue = {uri => spotifyQueueTrack(accessToken, uri)}
            />
        }
    />
}


export default SearchbarPresenter