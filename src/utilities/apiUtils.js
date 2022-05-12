import {client_id, client_secret, redirect_uri} from "../config/spotifyConfig"

const BASE_URL = "https://accounts.spotify.com"
const API_URL = "https://api.spotify.com/v1"

const spotifyApiHeaders = {
    "Authorization": "Basic " + (Buffer.from(client_id + ":" + client_secret)).toString("base64"),
    "Content-Type": "application/x-www-form-urlencoded"
}


// Scopes for Spotify authorization 
const scope = [
    //Spotify Connect
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",

    //Listening History
    "user-read-recently-played",
    "user-read-playback-position",

    //Playlists
    "playlist-read-collaborative",
    "playlist-read-private",

    //Playback
    "app-remote-control",
    "streaming",

    //Users
    "user-read-email",
    "user-read-private",

    //Library
    "user-library-read"
].join(" ")

/*
*   Helper funciton to construct options for some Spotify fetch requests
*/
function fetchOptions(method, accessToken, body=undefined) {
    let options = {
        method,
        headers: {
            "Authorization": "Bearer " + accessToken,
            "Content-Type": "application/json"
        }
    }
    if (body) {
        options.body = JSON.stringify(body)
    }
    return options
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
        const database = getFirebase().database()
        const uid = getState().firebase.auth.uid
        let token = getState().spotify.refreshToken
        if (!token) {
            const res = await database.ref("users/" + uid + "/refreshToken").get()
            token = res.val()
            if (!token) {
                return dispatch({type: "spotify/setLoadStatus"})
            }
        }
        let res = await refreshToken(token)
        if (!res.refresh_token) {
            res.refresh_token = token
        } else {
            database.ref("users/" + uid + "/refreshToken").set(res.refresh_token)
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
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                const uid = user.uid
                firebase.database().ref("users/" + uid + "/refreshToken").set(res.refresh_token)
                navigate("../home", {replace: true})
            }
        })
        
        
        
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
    const options = fetchOptions("PUT", accessToken, {device_ids: [id]})
    fetch(API_URL + "/me/player", options)
}

/*
*   Add a track to the end of the users queue
*/
function spotifyQueueTrack(accessToken, uri) {
    const options = fetchOptions("POST", accessToken)
    return fetch(API_URL + "/me/player/queue?uri=" + uri, options)
}

/*
*   Play a track
*/
function spotifyPlayTrack(accessToken, uri) {
    const options = fetchOptions("PUT", accessToken, {uris: [uri]})
    fetch(API_URL + "/me/player/play", options)
}

/*
*   Redux thunk for initializing the Spotify playback SDK.
*   The thunk will dispatch the initialized `Spotify.Player` component to the redux state
*   
*   ´listeners´ should contain key value pairs of player events and their callbacks
*/
function initSpotifyPlayerSDK(listeners) {
    return async (dispatch, getState) => {
        const script = document.createElement("script")
        script.src = "https://sdk.scdn.co/spotify-player.js"
        script.id = "spotifySDK"
        script.async = true
        document.body.appendChild(script)

        const accessToken = getState().spotify.accessToken
        if (!accessToken) {
            console.log("Accesstoken not found!")
        }

        window.onSpotifyWebPlaybackSDKReady = () => {
            const player = new window.Spotify.Player({
                name: "MSAP",
                getOAuthToken: cb => {cb(accessToken)},
                volume: 0.5
            })
            
            Object.entries(listeners).forEach(listener => {
                const event = listener[0]
                const callback = listener[1]
                player.addListener(event, callback)
            })

            player.connect()
            
            dispatch({type: "spotify/addPlayer", payload: player})
        }
    }
}

/*
*   Check if a specified device is active
*   Probably
*/
async function isActive(accessToken, id) {
    const options = fetchOptions("GET", accessToken)
    const data = await fetch(API_URL + "/me/player/devices", options).then(treatHTTPResponseACB)
    const device = data.devices.find(device => device.id == id)
    if (device && device.is_active) {
        return true
    }
    return false
}

function unmountSpotifyPlayerSDK() {
    return async (dispatch, getState) => {
        const player = getState().spotify.player
        const listeners = ["ready", "not_ready", "player_state_changed"]
        listeners.forEach(listener => player.removeListener(listener))
        player.disconnect()
        dispatch({type: "spotify/clearState"})

    }
} 

export {
    spotifyAuthorize, 
    handleRedirect, 
    spotifyGet, 
    getNewToken, 
    initSpotifyPlayerSDK, 
    spotifyTransferPlayBack, 
    spotifyQueueTrack, 
    spotifyPlayTrack, 
    isActive,
    unmountSpotifyPlayerSDK
}
