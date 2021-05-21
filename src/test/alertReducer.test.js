import alertReducer, { initialState } from '../reducers/alertReducer';

describe('alert reducer', () => {
  it('should return the initial state', () => {
    expect(alertReducer(null, {})).toEqual(initialState);
  });
});
