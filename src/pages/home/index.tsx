import React, { useState } from 'react';
import Container from '../../components/container';
import TextArea from '../../components/textArea';

const Home = () => {
  return (
    <Container>
      <div>
        <h1>Home page </h1>
        <TextArea value={''} onChange={() => {}} />
      </div>
    </Container>
  );
};

export default Home;
