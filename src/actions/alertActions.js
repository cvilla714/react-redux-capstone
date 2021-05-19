import { REMOVE_ALERT, SET_ALERT } from './types';

const setAlert = (payload) => ({
  type: SET_ALERT,
  payload,
});

export const removeAlert = () => ({
  type: REMOVE_ALERT,
});

export default setAlert;
