import React from 'react';
import '../style/Quote.css';

const Qoute = () => {
  const info = 'Mathematics is not about numbers equations, computations, or algorithms. It is about undersatanding.';
  const author = '-William paul Thurston';
  return (
    <section className="quoteInfo">
      <p>{info}</p>
      <span>{author}</span>
    </section>
  );
};

export default Qoute;
