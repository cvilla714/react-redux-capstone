/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/static-property-placement */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
  static defaultProps = {
    title: 'GitHub Finder',
    icon: 'fab fa-github',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          {/* <i className="fab fa-github" /> */}
          <i className={this.props.icon} />
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
