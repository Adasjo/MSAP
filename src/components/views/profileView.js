import React from "react"
import "../../styles/profile.css"

import pencil from "../../assets/pencil.svg"

/*
*   Helper react component for a switch
*/
function Switch({description, onToggle}) {
    return <div>
        {description}
        <label className="switch">
            <input type="checkbox" onChange={onToggle}/>
            <span/>
        </label>
    </div>
}

function ProfileView({username, email, photoURL, uploadImage, changeName, toggleDark, logout}) {
    return <div className="profile">
        <div className="profileHeader">
            <div className="profileImage">
                <img src={photoURL}/>
                <label>
                    <input type="file" onInput={uploadImage}/>
                    Upload image
                </label>
            </div>
            <div className="profileInfo">
                <div>Profile</div>
                <div>
                    <input className="profileName" defaultValue={username} onBlur={changeName}/>
                    <img className="profilePen" src={pencil}/>
                </div>
                <div>{email}</div>
            </div>
        </div>
        <div className="profileSettings">
            <h3>Preferences</h3>
            <Switch description={"Dark mode"} onToggle={toggleDark}/>
        </div>
        <button className="buttonLogout" onClick={logout}>Log Out</button>
    </div>
}

export default ProfileView