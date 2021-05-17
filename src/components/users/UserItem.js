/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => (
  <div className="card text-center">
    <img
      src={avatar_url}
      alt=""
      className="round-img"
      style={{ width: '60px' }}
    />
    <h3>{login}</h3>
    <div>
      {/* <a href={html_url} className="btn btn-dark btn-sm-my-1"> */}
      <Link to={`/user/${login}`} className="btn btn-dark btn-sm-my-1">
        More Info
      </Link>
    </div>
  </div>
);

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
