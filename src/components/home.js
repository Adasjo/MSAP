import React from "react"
import { useSelector } from "react-redux"
import SearchBar from "./searchBar"
import SideBar from "./SideBar"

function Home() {
    const state = useSelector(state => state)

    console.log(state)

    return <div>
            Temporary home screen!
            <SideBar/>
            <SearchBar/>
        </div>
}

export default Home