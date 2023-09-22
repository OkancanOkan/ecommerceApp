import React from 'react';
import Container from '../../components/container';
import Badge from '../../components/badge';

const Home = () => {
  return (
    <Container>
      <div>
        <h1>Home page </h1>
        <Badge badgeStyleCircle text="Sale" circleColour="orange" />
      </div>
    </Container>
  );
};

export default Home;
