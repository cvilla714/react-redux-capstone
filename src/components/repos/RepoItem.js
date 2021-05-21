import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => (
  <div className="card">
    <h3>
      <a href={repo.html_url}>{repo.name}</a>
    </h3>
  </div>
);

RepoItem.propTypes = {
  repo: PropTypes.arrayOf(Array).isRequired,
  html_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default RepoItem;
