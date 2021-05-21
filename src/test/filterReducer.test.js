import filterReducer, { initialState } from '../reducers/filterReducer';

describe('filter reducer', () => {
  it('should return the initial state', () => {
    expect(filterReducer(null, {})).toEqual(initialState);
  });
});
