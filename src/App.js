/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
// import axios from 'axios';
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

const App = () => {
  // const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({});
  // const [repos, setRepos] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // const searchUsers = async (text) => {
  //   setLoading(true);

  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${text}`,
  //     {
  //       headers: {
  //         Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  //       },
  //     },
  //   );
  //   setUsers(res.data.items);
  //   setLoading(false);
  // };

  //  get a single Github user
  // const getUser = async (username) => {
  //   setLoading(true);

  //   const res = await axios.get(`https://api.github.com/users/${username}`, {
  //     headers: {
  //       Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  //     },
  //   });

  //   setUser(res.data);
  //   setLoading(false);
  // };

  //  get Github user repos
  // const getUserRepos = async (username) => {
  //   setLoading(true);

  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`,
  //     {
  //       headers: {
  //         Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  //       },
  //     },
  //   );

  //   setRepos(res.data);
  //   setLoading(false);
  // };

  //  Clear users from state
  // const clearUsers = () => {
  //   setUsers([]);
  //   setLoading(false);
  // };

  //  Set alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                // eslint-disable-next-line no-unused-vars
                render={(props) => (
                  <>
                    <Search setAlert={showAlert} />
                    <Users />
                  </>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                component={User}
                // render={(props) => (
                //   <User {...props} getUserRepos={getUserRepos} repos={repos} />
                // )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
