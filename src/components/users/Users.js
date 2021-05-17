/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  render() {
    const { users } = this.props;
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
