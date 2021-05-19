import setAlert, { removeAlert } from '../actions/alertActions';

describe('Action Types for setAlert', () => {
  test('categoryRequest should not return an empty action type', () => {
    const action = setAlert();
    expect(action.type).not.toBe('');
  });

  test('categoryRequest should not return an empty action type', () => {
    const action = setAlert();
    expect(action.payload).not.toBe('');
  });

  test('removeAlert should return back null', () => {
    const action = removeAlert();
    expect(action.type).toBe('REMOVE_ALERT');
  });
});
