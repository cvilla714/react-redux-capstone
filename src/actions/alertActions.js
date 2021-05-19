import { SET_ALERT } from './types';

const setAlert = (msg, type) => ({
  type: SET_ALERT,
  payload: { msg, type },
});

export default setAlert;
