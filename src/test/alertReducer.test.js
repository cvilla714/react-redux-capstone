import alertReducer, { initialState } from '../redux/reducers/alertReducer';

describe('alert reducer', () => {
  it('should return the initial state', () => {
    expect(alertReducer(null, {})).toEqual(initialState);
  });
});
