import React, { useState } from 'react';
import Load from '../components/quote/Load';
import Quote from '../components/quote/Quote';
import { fetchQuote } from '../services/twinPeaksApi';

const TwinPeaksQuote = () => {
  const [quote, setQuote] = useState({});
  

  const handleClick = async () => {
    const quote = await fetchQuote();
 
    setQuote({ quote });
  };
  return (
    <>
      <Quote quoteText={quote} />
      <Load onClick={handleClick} />
    </>
  );

};

export default TwinPeaksQuote;
