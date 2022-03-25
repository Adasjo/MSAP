import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './styles/index.css';
import App from './App';
import rootReducer from './reducers/root';
import firebase from "firebase/app";
import {getFirestore} from 'redux-firestore'
import {getFirebase} from 'react-redux-firebase'

const store = createStore(rootReducer);

const render = () => ReactDOM.render(
  <App
    value={store.getState().counter.value}
    onIncrement={() => store.dispatch({type: 'increment'})}
    onDecrement={() => store.dispatch({type: 'decrement'})}
  />,
  document.getElementById('root')
);

render();
store.subscribe(render);
