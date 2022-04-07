import React from "react"
import { useSelector } from "react-redux"
import SearchBar from "./searchBar"

function Home() {
    const state = useSelector(state => state)

    console.log(state)

    return <div>
            Temporary home screen!
            <SearchBar/>
        </div>
}

export default Home