import {combineReducers} from "redux"
import {firebaseReducer} from 'react-redux-firebase'

// Custom reducers
import userReducer from "./userInfo"


export default rootReducer = combineReducers({
    firebase: firebaseReducer,
    userInfo: userReducer
})
