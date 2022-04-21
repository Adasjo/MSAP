import React from "react"
import { useSelector } from "react-redux"


function NoPage() {
    const state = useSelector(state => state)
    return <div style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <h1>404: Page not found</h1>
    </div>
}

export default NoPage