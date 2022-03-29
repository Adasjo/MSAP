import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider as FirebaseProvider } from 'react-redux-firebase';
import './styles/index.css';
import App from './App';
import rootReducer from './reducers/root';
import fbConfig from "./config/fbConfig"
import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/database"

const store = createStore(rootReducer);

firebase.initializeApp(fbConfig)

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  initializeAuth: true
  // createFirestoreInstance // <- needed if using firestore
}

//window.location.pathname = "sign-in"

const render = () => ReactDOM.render(
  <Provider store={store}>
    <FirebaseProvider {...rrfProps}>
      <App/>
    </FirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

render();
store.subscribe(render);
