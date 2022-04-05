import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.css'
import SignIn from './components/signIn'
import SignUp from './components/signUp'
import NoPage from './components/noPage'

function App() {
  return <Router>
    <Routes>
      <Route path="/">
        <Route path="sign-in" element={<SignIn/>}/>
        <Route path="register" element={<SignUp/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Route>
    </Routes>
  </Router>
}
  
export default App;
  