import * as actions from '../redux/actions/index';
import * as types from '../redux/actions/types';

describe('actions', () => {
  it('should clear the users', () => {
    const expectedAction = {
      type: types.CLEAR_USERS,
    };
    expect(actions.clearUsers()).toEqual(expectedAction);
  });

  it('should set loading to true', () => {
    const expectedAction = {
      type: types.SET_LOADING,
    };
    expect(actions.setLoading()).toEqual(expectedAction);
  });
});
