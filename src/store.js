import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import makeRootReducer from "./reducers/reduxRoot"
import { getFirebase } from "react-redux-firebase"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const middleware = [thunk.withExtraArgument(getFirebase)]

const enhancer = composeWithDevTools(applyMiddleware(...middleware))

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ["spotify"]
  }

function getStore() {
  const persistedReducer = persistReducer(persistConfig, makeRootReducer())
  const store = createStore(persistedReducer, enhancer)
  const persistor = persistStore(store)
  return {store: store, persistor: persistor}
}

export default getStore