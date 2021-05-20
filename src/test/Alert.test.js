import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import { createStore, applyMiddleware } from 'redux';
import combineReducers from '../reducers';
import Alert from '../containers/layout/Alert';

test('Alert renders correctly', () => {
  const store = createStore(combineReducers, applyMiddleware(thunk));
  const tree = create(
    <Provider store={store}>
      <Alert />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
