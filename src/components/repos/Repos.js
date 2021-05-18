/* eslint-disable react/forbid-prop-types */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({ repos }) =>
  repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
