import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./reducers/reduxRoot"
import { getFirebase } from "react-redux-firebase"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage/session"

const middleware = [thunk.withExtraArgument(getFirebase)]

const enhancer = composeWithDevTools(applyMiddleware(...middleware))

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ["spotify"]
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, enhancer)
const persistor = persistStore(store)

export {
    store,
    persistor
}