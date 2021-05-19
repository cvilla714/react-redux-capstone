import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import { createStore, applyMiddleware } from 'redux';
import { MemoryRouter } from 'react-router-dom';
import combineReducers from '../reducers';
import User from '../components/users/User';

test('User component renders correctly', () => {
  const store = createStore(combineReducers, applyMiddleware(thunk));
  const tree = create(
    <Provider store={store}>
      <MemoryRouter>
        <User />
      </MemoryRouter>
      ,
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
