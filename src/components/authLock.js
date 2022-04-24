import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

/*
*   A react component to protect it's children behind authentification
*/
function AuthLock() {
    const auth = useSelector(state => state.firebase.auth)

    if (auth.isLoaded && auth.uid) {
        return <Outlet/>
    } else if (auth.isLoaded) {
        return <div>Loading...</div>
    }
    
    return <Navigate to={"/sign-in"}/>  
}

export default AuthLock