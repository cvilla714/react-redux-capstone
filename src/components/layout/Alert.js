/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
import React from 'react';

const Alert = ({ alert }) =>
  alert !== null && (
    <div className={`alert alert-${alert.type}`}>
      <i className="fas fa-info-circle">{alert.msg}</i>
    </div>
  );

export default Alert;
