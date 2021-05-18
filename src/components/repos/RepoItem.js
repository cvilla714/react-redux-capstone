/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => (
  <div className="card">
    <h3>
      <a href={repo.html_url}>{repo.name}</a>
    </h3>
  </div>
);

RepoItem.propType = {
  repo: PropTypes.object.isRequired,
  html_url: PropTypes.string.isRequired,
};

export default RepoItem;
