import React from 'react'

const Profile = (props) => {
    return (
        <div>
            <h1>
           {props.fullName}
           <br/>
           {props.bio}
           <br/>
           {props.profession} 
           </h1>
           <br/>
           {props.children}
           {props.alert(props.bio)} 
        </div>
    )
}

export default Profile
