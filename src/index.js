import 'regenerator-runtime/runtime' // Weird thing to get async working
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider as FirebaseProvider } from 'react-redux-firebase'
import './styles/index.css'
import App from './App'
import { fbConfig, rrfConfig } from "./config/fbConfig"
import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/database"
import store from "./store"
import { BrowserRouter } from 'react-router-dom'

firebase.initializeApp(fbConfig)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  initializeAuth: true
}

const render = () => ReactDOM.render(
  <Provider store={store}>
    <FirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </FirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

render();
//store.subscribe(render);
