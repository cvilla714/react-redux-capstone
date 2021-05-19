/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import store from './store';
import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert />
          <Switch>
            <Route
              exact
              path="/"
              // eslint-disable-next-line no-unused-vars
              render={(props) => (
                <>
                  <Search />
                  <Users />
                </>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:login" component={User} />
          </Switch>
        </div>
      </div>
    </Router>
  </Provider>
);

export default App;
