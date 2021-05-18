import { SEARCH_USERS, SET_LOADING } from '../actions/types';

const initialState = {
  users: [],
  user: {},
  repos: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      //   console.log(action.payload);
      return {
        ...state,
        users: action.payload,
        laoding: false,
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
