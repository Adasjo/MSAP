import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./reducers/root"

const middleware = [thunkMiddleware]

const enhancer = composeWithDevTools(applyMiddleware(...middleware))

const store = createStore(rootReducer, enhancer)

export default store