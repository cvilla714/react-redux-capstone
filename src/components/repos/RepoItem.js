import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo: { html_url: htmlUrl, name } }) => (
  <div className="card">
    <h3>
      <a href={htmlUrl}>{name}</a>
    </h3>
  </div>
);

RepoItem.defaultProps = {
  repo: [],
  name: '',
};

RepoItem.propTypes = {
  repo: PropTypes.objectOf(Object),
  name: PropTypes.string,
};

export default RepoItem;
