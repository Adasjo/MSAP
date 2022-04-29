import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/App.css'

import Home from './components/home'
//import SignIn from './components/signIn'
//import SignUp from './components/signUp'
import Spotify from './components/spotify'
import NoPage from './components/noPage'
//import GettingStarted from './components/gettingStarted'
import AuthLock from './components/authLock'


const SignUp = require('./components/presenters/signUpPresenter.js').default;
const SignIn = require('./components/presenters/signInPresenter.js').default;
const GettingStarted = require('./components/presenters/gettingStartedPresenter.js').default;


function App() {
  return <Routes>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/register" element={<SignUp/>}/>
      <Route path="/spotify" element={<Spotify/>}/>
      <Route path="/" element={<AuthLock/>}>
        <Route path="/home/*" element={<Home/>}/>
        <Route path="/getting-started" element={<GettingStarted/>}/>
      </Route>
      <Route path="*" element={<NoPage/>}/>
    </Routes>
}
  
export default App;
  