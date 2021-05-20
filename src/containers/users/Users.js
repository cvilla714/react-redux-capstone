import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserItem from '../../components/users/UserItem';
import Spinner from '../../components/layout/Spinner';

const Users = ({ users, loading, filter }) => {
  if (loading) {
    return <Spinner />;
  }

  const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem',
  };

  const filteringUsers = () => {
    if (filter) {
      return users.filter((user) => user.login.toLowerCase().includes(filter.toLowerCase()));
    }
    return users;
  };

  return (
    <div style={userStyle}>
      {filteringUsers().map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.arrayOf(Array).isRequired,
  loading: PropTypes.bool.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.github.users,
  loading: state.github.loading,
  filter: state.filter,
});

export default connect(mapStateToProps)(Users);
