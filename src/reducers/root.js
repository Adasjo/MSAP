import {combineReducers} from "redux"
import {firebaseReducer} from 'react-redux-firebase'

// Custom reducers
import spotifyReducer from "./spotifyReducer"


const rootReducer = combineReducers({
    firebase: firebaseReducer,
    spotify: spotifyReducer
})

export default rootReducer  