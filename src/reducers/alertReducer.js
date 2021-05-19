import { SET_ALERT } from '../actions/types';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return action.payload;
    default:
      return state;
  }
};
