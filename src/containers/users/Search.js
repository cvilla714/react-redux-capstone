import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchUsers, clearUsers } from '../../components/actions/index';
import setAlert, { removeAlert } from '../../components/actions/alertActions';
import FilterByName from './FilterByName';

const Search = ({
  searchUsers, clearUsers, setAlert, users, removeAlert,
}) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert({ msg: 'Please enter something', type: 'light' });
      setTimeout(() => {
        removeAlert();
      }, 3000);
    } else {
      searchUsers(text);
      setText('');
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search User..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          type="button"
          onClick={clearUsers}
        >
          Clear
        </button>
      )}
      {users.length > 1 && <FilterByName className="btn btn-light btn-block" />}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(Array).isRequired,
  removeAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.github.users,
  alert: state,
});

export default connect(mapStateToProps, {
  searchUsers,
  clearUsers,
  setAlert,
  removeAlert,
})(Search);
