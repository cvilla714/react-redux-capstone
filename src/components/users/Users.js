/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  }

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
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
