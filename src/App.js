import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.css'

import Home from './components/home'
import SignIn from './components/signIn'
import SignUp from './components/signUp'
import Spotify from './components/spotify'
import NoPage from './components/noPage'
import GettingStarted from './components/gettingStarted'

function App() {
  return <Router>
    <Routes>
      <Route path="/">
        <Route path="home" element={<Home/>}/>
        <Route path="sign-in" element={<SignIn/>}/>
        <Route path="register" element={<SignUp/>}/>
        <Route path="spotify" element={<Spotify/>}/>
        <Route path="getting-started" element={<GettingStarted/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Route>
    </Routes>
  </Router>
}
  
export default App;
  