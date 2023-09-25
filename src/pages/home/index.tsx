import React, { useState } from 'react';
import Container from '../../components/container';
import Rating from '../../components/rating';

const Home = () => {
  const [rating, setRating] = useState<number>(2); // Başlangıç değeri

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };
  return (
    <Container>
      <div>
        <h1>Home page </h1>
        <Rating initialValue={rating} onChange={handleRatingChange} max={5} />
      </div>
    </Container>
  );
};

export default Home;
