import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ name, text }) => (
  <section>
    <h2>{name || 'unknown'}</h2>
    <p>{text}</p>
  </section>
);

Quote.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Quote;
