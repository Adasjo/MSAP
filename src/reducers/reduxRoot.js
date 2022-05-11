import { combineReducers } from "redux"
import { firebaseReducer } from 'react-redux-firebase'
import storage from 'redux-persist/lib/storage'
import stateReconciler from 'redux-persist/lib/stateReconciler/hardSet'
import { persistReducer } from "redux-persist"

// Custom reducers
import spotifyReducer from "./spotifyReducer"

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
    spotify: spotifyReducer
})

export default rootReducer  