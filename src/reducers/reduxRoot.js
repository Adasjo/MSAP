import { combineReducers } from "redux"
import { firebaseReducer } from 'react-redux-firebase'
import storage from 'redux-persist/lib/storage'
import stateReconciler from 'redux-persist/lib/stateReconciler/hardSet'
import { persistReducer } from "redux-persist"

// Custom reducers
import spotifyReducer from "./spotifyReducer"
import settingsReducer from "./settingsReducer"

const persistOptions = key => {return {
    key: key, 
    storage,
    stateReconciler
}}

const rootReducer = combineReducers({
    firebase: persistReducer(
        persistOptions("firebase"),
        firebaseReducer
    ),
    settings: persistReducer(
        persistOptions("settings"),
        settingsReducer
    ),
    spotify: spotifyReducer
})

export default rootReducer  