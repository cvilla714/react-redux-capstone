import { SET_ALERT } from './types';

const setAlert = (payload) => ({
  type: SET_ALERT,
  payload,
});

export default setAlert;
