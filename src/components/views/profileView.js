import React from "react"

import "../../styles/profile.css"

const name = "Samuel Falk"

function ProfileView({username, email, photoURL, uploadImage, changeName}) {
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
                <input defaultValue={username} onKeyDown={changeName}/>
                <div>{email}</div>
            </div>
        </div>
        
    </div>
}

export default ProfileView