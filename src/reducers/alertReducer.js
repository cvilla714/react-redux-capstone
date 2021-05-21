import { REMOVE_ALERT, SET_ALERT } from '../components/actions/types';

export const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return action.payload;
    case REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};
