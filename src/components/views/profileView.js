import React from "react"
import "../../styles/profile.css"

const pencil = require("../../assets/pencil.svg")

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
                <div>
                    <input defaultValue={username} onBlur={changeName}/>
                    <img src={pencil}/>
                </div>
                <div>{email}</div>
            </div>
        </div>
        
    </div>
}

export default ProfileView