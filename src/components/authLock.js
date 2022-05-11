import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { isLoaded, useFirebase } from "react-redux-firebase"

/*
*   A react component to protect it's children behind authentification
*/
function AuthLock() {
    const auth1 = useFirebase().auth()
    const auth2 = useSelector(state => state.firebase.auth)
    if ((auth1.currentUser) || (isLoaded(auth2) && auth2.uid)) {
        return <Outlet/>
    } else if (!isLoaded(auth2)) {
        return <div>Waiting for auth...</div>
    }
    
    return <Navigate to={"/sign-in"}/>  
}

export default AuthLock