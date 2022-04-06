import 'regenerator-runtime/runtime' // Weird thing to get async working
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider as FirebaseProvider } from 'react-redux-firebase';
import './styles/index.css';
import App from './App';
import rootReducer from './reducers/root';
import { fbConfig, rrfConfig } from "./config/fbConfig"
import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/database"

const store = createStore(rootReducer);

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
      <App/>
    </FirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

render();
//store.subscribe(render);
