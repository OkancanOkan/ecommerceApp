import React, { useState } from 'react';
import Container from '../../components/container';
import InputButton from '../../components/input-button';

const Home = () => {
  return (
    <Container>
      <div>
        <h1>Home page </h1>
        <InputButton
          inputValue="Your email adress"
          setInputValue={() => {}}
          buttonLabel="Subscribe"
          onClick={() => {}}
          buttonVariant="black"
          buttonColour="white"
        />
      </div>
    </Container>
  );
};

export default Home;
