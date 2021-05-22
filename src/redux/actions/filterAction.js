import { FILTER_BY_NAME } from './types';

const filter = (text) => ({
  type: FILTER_BY_NAME,
  payload: text,
});
export default filter;
