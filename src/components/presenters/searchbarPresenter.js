import React, { useEffect } from "react"
import {useState} from "react"
import { useSelector } from "react-redux"
import {spotifyGet } from '../utilities/apiUtils.js'

import PlaylistView from "../views/searchbarView"

import "../styles/search.css"
import { useSearchParams } from "react-router-dom"
import SearchbarView from "../views/searchbarView.js"

const searchOptions = "&type=track&limit=20"
const searchInit = new URLSearchParams({
    search: ""
})

function SearchbarPresenter() {
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

    return <SearchbarView
    promiseNoData = {promiseNoData}/>
}


export default SearchbarPresenter