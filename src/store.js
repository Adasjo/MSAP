import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./reducers/root"
import { getFirebase } from "react-redux-firebase"

const middleware = [thunk]

const enhancer = applyMiddleware(thunk.withExtraArgument(getFirebase))

const store = createStore(rootReducer, enhancer)

export default store