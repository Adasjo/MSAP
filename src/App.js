import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import './styles/App.css'
import SignIn from './components/signIn'
import SignUp from './components/signUp'
import NoPage from './components/noPage'
import { useSelector } from 'react-redux'

function App() {
  const auth = useSelector(state => state.firebase.auth)
  const pathName = window.location.pathname

  if (!auth.uid && pathName !== "/register" && pathName !== "/sign-in") {
    window.location.pathname = "sign-in"
  }

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
  