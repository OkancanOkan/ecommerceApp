import React from 'react';
import Container from '../../components/container';
import TitleLine from '../../components/title-line';
import Dropdown from '../../components/dropdown';

const Home = () => {
  return (
    <Container>
      <div>
        <h1>Home page </h1>
        <Dropdown options={['Default', 'ulaş']} onSelect={() => {}} />
      </div>
    </Container>
  );
};

export default Home;
