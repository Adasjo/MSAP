import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './styles/index.css';
import App from './App';
import rootReducer from './reducers/root';

require("./config/fbConfig")

//window.location.pathname = "sign-in"

const store = createStore(rootReducer);

const render = () => ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

render();
store.subscribe(render);
