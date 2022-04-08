import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.css'

import Home from './components/home'
import SignIn from './components/signIn'
import SignUp from './components/signUp'
import Spotify from './components/spotify'
import NoPage from './components/noPage'
import SearchBar from './components/searchBar'
import GettingStarted from './components/gettingStarted'
import AuthLock from './components/authLock'

function App() {
  return <Router>
    <Routes>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/register" element={<SignUp/>}/>
      <Route path="/spotify" element={<Spotify/>}/>
      <Route path="/" element={<AuthLock/>}>
        <Route path="home" element={<Home/>}/>   
        <Route path="searchbar" element={<SearchBar/>}/>
        <Route path="getting-started" element={<GettingStarted/>}/>
      </Route>
      <Route path="*" element={<NoPage/>}/>
    </Routes>
  </Router>
}
  
export default App;
  