import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/App.css'

import Home from './components/home'
import SignIn from './components/presenters/signInPresenter'
import SignUp from './components/presenters/signUpPresenter'
import Spotify from './components/spotify'
import NoPage from './components/presenters/noPagePresenter'
import GettingStarted from './components/presenters/gettingStartedPresenter'
import AuthLock from './components/authLock'

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
  