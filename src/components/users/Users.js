/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'mojombo',
        avatarUrl: 'https://avatars.githubusercontent.com/u/1?v=4',
        htmlUrl: 'https://github.com/mojombo',
      },
      {
        id: '2',
        login: 'defunkt',
        avatarUrl: 'https://avatars.githubusercontent.com/u/2?v=4',
        htmlUrl: 'https://github.com/defunkt',
      },
      {
        id: '3',
        login: 'pjhyett',
        avatarUrl: 'https://avatars.githubusercontent.com/u/3?v=4',
        htmlUrl: 'https://github.com/pjhyett',
      },
    ],
  };

  render() {
    const { users } = this.state;

    const userStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gridGap: '1rem',
    };

    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
