import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../actions/index';

const initialState = {
  users: [],
  user: {},
  repos: [],
  loading: false,
};
