/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

const Alert = ({ alert }) =>
  alert !== null && (
    <div className={`alert alert-${alert.type}`}>
      <i className="fas fa-info-circle">{alert.msg}</i>
    </div>
  );

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps)(Alert);
