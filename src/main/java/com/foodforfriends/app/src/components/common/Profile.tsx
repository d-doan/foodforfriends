import React from 'react';
import {useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
    if (isAuthenticated) {
      return (
        <article className='column'>
            {user?.picture && <img src={user.picture} alt={user?.name} />}
            <h2>{user?.name}</h2>
        </article>
      )
    } else {
        return (
            <div />
        )
    }
};

export default Profile;