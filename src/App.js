import React, { Component } from 'react';
import './styles/App.css';
import SignIn from './components/signIn';

function App(props) {
  return <div>
    <SignIn store={props.store}></SignIn>
  </div>
}
  
export default App;
  