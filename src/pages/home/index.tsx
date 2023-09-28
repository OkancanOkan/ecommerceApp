import React, { useState } from 'react';
import Container from '../../components/container';
import Navbar from '../../components/navbar';
import Accordion from '../../components/accordion';

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Accordion title="Birinci Başlık">
        <p>Birinci başlık içeriği burada.</p>
      </Accordion>
    </Container>
  );
};

export default Home;
