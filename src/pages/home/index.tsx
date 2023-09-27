import React, { useState } from 'react';
import Container from '../../components/container';
import Navbar from '../../components/navbar';
import iconShopping from '../../assets/icons/shopping.svg';
import IconTitleSubtitle from '../../components/icon-title-subtitle';

const Home = () => {
  return (
    <Container>
      <Navbar />
      <IconTitleSubtitle
        title="Shop Online"
        subtitle="There are many variants of your online shopping "
        icon={iconShopping}
      />
    </Container>
  );
};

export default Home;
