import React from "react"
import { useSelector } from "react-redux"
import SearchBar from "./searchBar"
import Sidebar from "./Sidebar"

function Home() {
    const state = useSelector(state => state)

    console.log(state)

    return <div>
            Temporary home screen!
            <Sidebar/>
            <SearchBar/>
        </div>
}

export default Home