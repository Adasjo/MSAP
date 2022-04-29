import React from "react"
import { useSelector } from "react-redux"
import { spotifyAuthorize } from "../../utilities/apiUtils"
import GettingStartedView from "../views/gettingStartedView"

function GettingStartedPresenter() {
    const accessToken = useSelector(state => state.spotify.accessToken)
    return <GettingStartedView 
            accessToken = {accessToken} 
            autorize = {spotifyAuthorize}/>
}
export default GettingStartedPresenter