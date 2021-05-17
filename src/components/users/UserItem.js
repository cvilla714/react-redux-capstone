import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatarUrl, htmlUrl } }) => (
  <div className="card text-center">
    <img
      src={avatarUrl}
      alt=""
      className="round-img"
      style={{ width: '60px' }}
    />
    <h3>{login}</h3>
    <div>
      <a href={htmlUrl} className="btn btn-dark btn-sm-my-1">
        More Info
      </a>
    </div>
  </div>
);

UserItem.propTypes = {
  user: PropTypes.arrayOf(Object).isRequired,
};

export default UserItem;
