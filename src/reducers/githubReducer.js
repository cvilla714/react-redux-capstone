import { CLEAR_USERS, SEARCH_USERS, SET_LOADING } from '../actions/types';

const initialState = {
  users: [],
  user: {},
  repos: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        laoding: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
