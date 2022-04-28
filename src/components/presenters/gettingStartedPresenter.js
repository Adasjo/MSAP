import React from "react"
import { useSelector } from "react-redux"
import { spotifyAuthorize } from "../../utilities/apiUtils"
import GettingStartedView from "../views/gettingStartedView"

function GettingStartedPresenter() {
    const state = useSelector(state => state)
    return <GettingStartedView 
            state = {state} 
            autorize = {spotifyAuthorize}/>
}
export default GettingStartedPresenter