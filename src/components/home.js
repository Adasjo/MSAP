import React from "react"
import { useSelector } from "react-redux"

function Home() {
    const state = useSelector(state => state)

    console.log(state)

    return <div>
            Temporary home screen!
        </div>
}