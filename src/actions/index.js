import axios from 'axios';
import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
} from './types';

export const setLoading = () => ({
  type: SET_LOADING,
});

export const searchUsers = (text) => async (dispatch) => {
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
};

export const getUser = (username) => async (dispatch) => {
  setLoading();

  const res = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  });
  dispatch({
    type: GET_USER,
    payload: res.data,
  });
};

export const getUserRepos = (username) => async (dispatch) => {
  setLoading();

  const res = await axios.get(
    `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`,
    {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    },
  );

  dispatch({
    type: GET_REPOS,
    payload: res.data,
  });
};

export const clearUsers = () => ({
  type: CLEAR_USERS,
});
