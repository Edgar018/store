import React from 'react';
import { Redirect } from 'react-router-dom';

const Profile = ({validation}) => {
    if(validation()){
        return (
            <div>
                <h1>hi {localStorage.getItem('name')}</h1>
            </div>
        );
    }
    return <Redirect to="/signup"/>
}

export default Profile;