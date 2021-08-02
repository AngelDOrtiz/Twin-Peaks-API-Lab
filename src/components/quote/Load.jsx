import React from 'react';
import PropTypes from 'prop-types';

const Load = ({ onClick }) => {
  <button onClick={onClick}>Get Random Quote</button>;
};

Load.propTypes = {
  onClick: PropTypes.func.isRequired
};
