import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Repos from '../repos/Repos';
import Spinner from '../../components/layout/Spinner';
import { getUser, getUserRepos } from '../../components/actions/index';

const User = ({
  user, loading, repos, getUser, getUserRepos, match,
}) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }, []);

  const {
    name,
    company,
    avatar_url: avatarUrl,
    location,
    bio,
    blog,
    login,
    html_url: htmlUrl,
    followers,
    following,
    public_repos: publicRepos,
    public_gists: publicGists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable:
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatarUrl}
            className="round-img"
            alt=""
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>
            Location:
            {location}
          </p>
        </div>
        <div>
          {bio && (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          )}
          <a href={htmlUrl} className="btn btn-dark my-1">
            Visit Github Profiel
          </a>
          <ul>
            <li>
              {login && (
                <>
                  <strong>Username: </strong>
                  {login}
                </>
              )}
            </li>
            <li>
              {company && (
                <>
                  <strong>Compnay: </strong>
                  {company}
                </>
              )}
            </li>
            <li>
              {blog && (
                <>
                  <strong>Webiste: </strong>
                  {blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">
          Followers:
          {followers}
        </div>
        <div className="badge badge-success">
          Following:
          {following}
        </div>
        <div className="badge badge-light">
          Public Repos:
          {publicRepos}
        </div>
        <div className="badge badge-dark">
          Public Gists:
          {publicGists}
        </div>
      </div>
      <Repos repos={repos} />
    </>
  );
};

User.defaultProps = {
  loading: false,
  match: '',
  repos: [],
  getUser: PropTypes.func,
  getUserRepos: PropTypes.func,
};

User.propTypes = {
  user: PropTypes.objectOf(Array).isRequired,
  loading: PropTypes.bool,
  match: PropTypes.string,
  repos: PropTypes.arrayOf(Array),
  getUser: PropTypes.func,
  getUserRepos: PropTypes.func,
};
const mapStateToProps = (state) => ({
  user: state.github.user,
});

export default connect(mapStateToProps, { getUser, getUserRepos })(User);
