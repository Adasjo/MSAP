import {combineReducers} from "redux"
import {firebaseReducer} from 'react-redux-firebase'

// Custom reducers
import userReducer from "./userInfo"


const rootReducer = combineReducers({
    firebase: firebaseReducer,
    userInfo: userReducer
})

export default rootReducer  