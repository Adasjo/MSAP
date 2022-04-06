import {combineReducers} from "redux"
import {firebaseReducer} from 'react-redux-firebase'

// Custom reducers
import userReducer from "./userInfo"
import spotifyReducer from "./spotifyReducer"


const rootReducer = combineReducers({
    firebase: firebaseReducer,
    userInfo: userReducer,
    spotify: spotifyReducer
})

export default rootReducer  