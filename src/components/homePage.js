import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const text = [];
  const text1 = "Are you feeling alright?";
  const text2 = "That's okay, maybe Sun Tzu's wisdom will enlighten your day!";
  const [page, setPage] = useState(1);
  const handleNext = () => {
    setPage(page + 1);
  };
  if (page === 1) {
    text.push(text1);
  } else {
    text.splice(0, 1);
    text.push(text2);
  }
  return (
    <div className="home">
      <h1 className="home__title">Spiritual Battle</h1>
      <p className="home__intro"> {text} </p>
      {page !== 2 ? (
        <button type="button" className="home__next" onClick={handleNext}>
          Maybe?
        </button>
      ) : undefined}
      {page === 2 ? (
        <Link to={'/start'}>
          <button type="button" className="home__start">
            I hope so.
          </button>
        </Link>
      ) : undefined}
    </div>
  );
};

export default HomePage;
