import React from 'react';
import usePropy from './usePropy';

const UserList = () => {
    const users = usePropy('users');

    return (
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    )
}

export default UserList;