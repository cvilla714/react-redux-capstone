/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = (props) => {
  if (props.loading || props.users === null) {
    return <Spinner />;
  }

  console.log(props);
  const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem',
  };

  return (
    <div style={userStyle}>
      {props.users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

// Users.propTypes = {
//   users: PropTypes.array.isRequired,
//   loading: PropTypes.bool.isRequired,
// };
const mapStateToProps = (state) => ({
  users: state,
});
// export default Users;
export default connect(mapStateToProps)(Users);
