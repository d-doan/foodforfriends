import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
    if (isAuthenticated) {
      return (
        <article style={{display: 'flex', alignItems: 'end', padding: '4px'}}>
            {user?.picture && <img src={user.picture} alt={user?.name} width={50} height={50} style={{padding: '4px'}}/>}
            {user?.name}
        </article>
      )
    } else {
        return (
            <div />
        )
    }
};

export default Profile;