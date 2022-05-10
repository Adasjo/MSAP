import {combineReducers} from "redux"
import {firebaseReducer} from 'react-redux-firebase'

// Custom reducers
import spotifyReducer from "./spotifyReducer"

/*
*   The root reducer is separated into to steps to enable a redux state reset
*/
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    spotify: spotifyReducer
})

export default rootReducer  