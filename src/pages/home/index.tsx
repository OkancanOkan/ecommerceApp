import React, { useState } from 'react';
import Container from '../../components/container';
import Navbar from '../../components/navbar';
import Accordion from '../../components/accordion';
import Timer from '../../components/timer';

const Home = () => {
  const targetDate = new Date('2023-09-29T00:00:00');
  return (
    <Container>
      <Navbar />
      <Accordion title="Birinci Başlık">
        <p>
          Through the collaboration with customers in discussing needs and
          demand, we're able to attain mutual understanding, gain customer trust
          to offer appropriate advice, and bring about suggestions on suitable
          technology to transform your business.
        </p>
      </Accordion>
      <Timer targetDate={targetDate} />
    </Container>
  );
};

export default Home;
