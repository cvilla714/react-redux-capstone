/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  CLEAR_USERS, GET_USER, SEARCH_USERS, SET_LOADING,
} from './types';

//  Set Loading
export const setLoading = () => ({
  type: SET_LOADING,
});

//  Search Users
export const searchUsers = (text) => async (dispatch) => {
  //   setLoading(true);
  setLoading();

  const res = await axios.get(`https://api.github.com/search/users?q=${text}`, {
    headers: {
      Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  });
  dispatch({
    type: SEARCH_USERS,
    payload: res.data.items,
  });
  //   setUsers(res.data.items);
  //   setLoading(false);
};

//  Get user
export const getUser = (username) => async (dispatch) => {
  setLoading(true);

  const res = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  });
  dispatch({
    type: GET_USER,
    payload: res.data,
  });

  // setUser(res.data);
  // setLoading(false);
};

//  Get Repos

//  Clear Users
export const clearUsers = () => ({
  type: CLEAR_USERS,
  // setUsers([]);
  // setLoading(false);
});
