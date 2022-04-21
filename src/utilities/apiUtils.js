import Spotify from "../components/spotify"
import {BASE_URL, client_id, client_secret, redirect_uri, scope} from "../config/spotifyConfig"

const API_URL = "https://api.spotify.com/v1"

const spotifyApiHeaders = {
    "Authorization": "Basic " + (Buffer.from(client_id + ":" + client_secret)).toString("base64"),
    "Content-Type": "application/x-www-form-urlencoded"
}

/*
*   Make a fetch call from the given endpoint with optionally specified options and search parameters
*/
async function apiCall(endpoint, options = {}, params = {}) {
    const URL = BASE_URL + endpoint + new URLSearchParams(params)
    const response = await fetch(URL, options)
    return treatHTTPResponseACB(response)
}

/*
*   Treat an HTTP response. Return the json data if successful
*/
function treatHTTPResponseACB(response) {
    function throwExplanationACB(data) {
        throw "API error" + response.status + " " + data
    }
    if (!response.ok) 
        return response.text().then(throwExplanationACB)
    return response.json()
}

/*
*   Redirect the user to Spotify's authorization page
*/
function spotifyAuthorize() {
    window.location.href = BASE_URL + "/authorize?" + new URLSearchParams({
        client_id,
        response_type: "code",
        redirect_uri,
        scope
    })
}

/*
*   Extract search parameters from the url
*/
function getSearchParam(param) {
    return window.location.search.slice(1).split("&").map(str => str.split("=")).find(tup => tup[0] == param)[1]
}

/*
*   Given a authentification code, request an access token from Spotify
*/
function getAccessToken(code) {
    const options = {
        method: "POST",
        headers: spotifyApiHeaders,
        body: new URLSearchParams({
            grant_type: "authorization_code",
            code,
            redirect_uri
        })
    }
    return apiCall("/api/token", options)
}

/*
*   Given a refresh token, request a new acess token from Spotify
*/
function refreshToken(refresh_token) {
    const options = {
        method: "POST",
        headers: spotifyApiHeaders,
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token
        })
    }
    return apiCall("/api/token", options)
}

/*
*   Redux thunk for geting a new access token. It primarily tries to use the refresh token from the redux state, 
*   but falls back on fetching from firebase if no refresh token is loaded in the state. 
*
*   This function should be dispatched if a user is logged in but doesn't have a loaded spotify access token. 
*   It should also be dispatched if an API call returns an error due to a faulty access token.
*/
function getNewToken() {
    return async (dispatch, getState, getFirebase) => {
        const firebase = getFirebase()
        const uid = firebase.auth().currentUser.uid
        let token = getState().spotify.refreshToken
        if (!token) {
            const res = await firebase.database().ref("users/" + uid + "/refreshToken").get()
            token = res.val()
            if (!token) {
                return dispatch({type: "spotify/setLoadStatus"})
            }
        }
        let res = await refreshToken(token)
        if (!res.refresh_token) {
            res.refresh_token = token
        } else {
            firebase.database().ref("users/" + uid + "/refreshToken").set(res.refresh_token)
        }
        dispatch({type: "spotify/updateTokens", payload: res})
    }
}

/*
*   Redux thunk for handeling the redirect back from Spotify's authentification page
*/
function handleRedirect(navigate) {
    return async (dispatch, _getState, getFirebase) => {
        const code = getSearchParam("code")
        const res = await getAccessToken(code)
        dispatch({type: "spotify/updateTokens", payload: res})
        const firebase = getFirebase()
        const uid = firebase.auth().currentUser.uid
        firebase.database().ref("users/" + uid + "/refreshToken").set(res.refresh_token)
        navigate("../home", {replace: true})
    } 
}

/*
*   Retrieve data from a specified Spotify endpoint with the given access token
*/
async function spotifyGet(endpoint, token) {
    const options = {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token
        }
    }
    const res = await fetch(API_URL + endpoint, options)
    return await res.json()
}

/*
*   Transfer the users playback to the web app 
*/
function spotifyTransferPlayBack(accessToken, id) {
    const options = {
        method: "PUT",
        headers: {
            "Authorization": "Bearer " + accessToken,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "device_ids": [id]
        })
    }
    fetch(API_URL + "/me/player", options)
}

/*
*   Redux thunk for initializing the Spotify playback SDK.
*   The thunk will dispatch the initialized `Spotify.Player` component to the redux state
*/
function initSpotifyPlayerSDK() {
    return async (dispatch, getState) => {
        const script = document.createElement("script")
        script.src = "https://sdk.scdn.co/spotify-player.js"
        script.async = true

        document.body.appendChild(script)
        
        const accessToken = getState().spotify.accessToken

        window.onSpotifyWebPlaybackSDKReady = () => {
            const player = new window.Spotify.Player({
                name: "MSAP Web Player",
                getOAuthToken: cb => {cb(accessToken)},
                volume: 0.5
            })
            
            dispatch({type: "spotify/addPlayer", payload: player})
        }
    }
}

export {spotifyAuthorize, handleRedirect, spotifyGet, getNewToken, initSpotifyPlayerSDK, spotifyTransferPlayBack}
