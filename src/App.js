import React, { Component } from 'react';
import './styles/App.css';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import { useSelector } from 'react-redux';

function App() {
  const userInfo = useSelector(state => state.userInfo)
  
  return <div>
    {!userInfo.id ? <SignIn/> : <></>}
  </div>
}
  
export default App;
  