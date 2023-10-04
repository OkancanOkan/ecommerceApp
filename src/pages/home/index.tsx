import React, { useState } from 'react';
import Container from '../../components/container';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import ProductCard from '../../components/product-card';

const Home = () => {
  // const targetDate = new Date('2024-09-29T00:00:00');

  // const tabs = [
  //   { label: 'Sekme 1', status: 'Aktif' },
  //   { label: 'Sekme 2', status: 'Pasif' },
  //   { label: 'Sekme 3', status: 'Beklemede' },
  // ];

  // const [activeTab, setActiveTab] = useState<number | null>(null);

  return (
    <Container>
      <Navbar />
      {/* <Accordion title="Birinci Başlık">
        <p>
          Through the collaboration with customers in discussing needs and
          demand, we're able to attain mutual understanding, gain customer trust
          to offer appropriate advice, and bring about suggestions on suitable
          technology to transform your business.
        </p>
      </Accordion>
      <Accordion title="İkinci Başlık">
        <p>
          Through the collaboration with customers in discussing needs and
          demand, we're able to attain mutual understanding, gain customer trust
          to offer appropriate advice, and bring about suggestions on suitable
          technology to transform your business.
        </p>
      </Accordion> */}
      {/* <Timer targetDate={targetDate} /> */}
      {/* <ProgressBar label={'Creativity'} percent={50} />
      <TitleSubtitle
        children={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
            erat sagittis
          </p>
        }
        title={'Frequently Question'}
      /> */}
      {/* <Breadcrumb
        items={[
          { label: 'Anasayfa', link: '/' },
          { label: 'Home', link: '/Home' },
        ]}
      />
      <TabCollapse data={tabs} active={activeTab} setActive={setActiveTab} /> */}
      <ProductCard
        imgSrc="https://helendo.jamstacktemplates.dev/images/products/art-deco-home/300x300.jpg"
        name="Art Deco Home"
        namePath=""
        price="55.00"
        imagePath={''}
        discount={10}
        outOfStock
      />
      <Footer />
    </Container>
  );
};

export default Home;
