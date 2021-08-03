import React from 'react';
import PropTypes from 'prop-types';

const Load = ({ onClick }) => {
  return <div>
    <button onClick={onClick}>Get Random Quote</button>;
  </div>;
};

Load.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Load;
