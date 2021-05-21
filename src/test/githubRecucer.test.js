import githubReducer from '../reducers/githubReducer';

describe('githubReducer', () => {
  it('should return the initial state', () => {
    expect(githubReducer(undefined, {})).toEqual({
      users: [],
      user: {},
      repos: [],
      loading: false,
    });
  });
});
