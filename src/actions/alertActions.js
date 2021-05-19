import { REMOVE_ALERT, SET_ALERT } from './types';

const setAlert = (msg, type) => ({
  type: SET_ALERT,
  payload: { msg, type },
});

setTimeout(
  () => ({
    type: REMOVE_ALERT,
  }),
  3000,
);

export default setAlert;
