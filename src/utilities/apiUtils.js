import {BASE_URL, client_id, client_secret, redirect_uri, scope} from "../config/spotifyConfig"

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
*   Handle the redirect back from Spotify's authentification page
*/
async function handleRedirect(dispatch, firebase, navigate) {
    const code = getSearchParam("code")
    const res = await getAccessToken(code)
    dispatch({type: "spotify/updateTokens", payload: res})
    const uid = firebase.auth().currentUser.uid
    firebase.database().ref("users/" + uid + "/refreshToken").set(res.refresh_token)
    navigate("../home", {replace: true})
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
    const res = await fetch("https://api.spotify.com/v1" + endpoint, options)
    return await res.json()
}

export {spotifyAuthorize, handleRedirect, spotifyGet}
