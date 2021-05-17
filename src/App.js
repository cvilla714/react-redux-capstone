import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar title="GitHub Finter" icon="fab fa-github" /> */}
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

export default App;
