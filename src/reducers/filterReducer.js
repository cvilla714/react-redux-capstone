import { FILTER_BY_NAME } from '../components/actions/types';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return action.payload;
    default:
      return state;
  }
};
