import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alert }) => alert !== null && (
<div className={`alert alert-${alert.type}`}>
  <i className="fas fa-info-circle">{alert.msg}</i>
</div>
);

Alert.propTypes = {
  alert: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps)(Alert);
