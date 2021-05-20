import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RepoItem from '../../components/repos/RepoItem';

const Repos = ({ repos }) => repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);

Repos.propTypes = {
  repos: PropTypes.arrayOf(Array).isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.github.repos,
});

export default connect(mapStateToProps)(Repos);
