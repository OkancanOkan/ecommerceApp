import React, { useState } from 'react';
import Container from '../../components/container';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import ProductCard from '../../components/product-card';
import './home.css';
import TableCardItem from '../../components/table-card-item';
import TableCard from '../../components/table-card';

const Home = () => {
  const tableHeader = [
    {
      id: 1,
      title: 'Product',
    },
    {
      id: 1,
      title: 'Price',
    },
    {
      id: 1,
      title: 'Quantity',
    },
    {
      id: 1,
      title: 'Total',
    },
  ];
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
      <div className="styled-home-page-product">
        <ProductCard
          imgSrc="https://helendo.jamstacktemplates.dev/images/products/animi-dolor-pariatur/300x300.jpg"
          name="Animi Dolar Pariatur"
          namePath=""
          price="10.00"
          imagePath=""
        />
        <ProductCard
          imgSrc="https://helendo.jamstacktemplates.dev/images/products/art-deco-home/300x300.jpg"
          name="Art Deco Home"
          namePath=""
          price="30.00"
          imagePath={''}
        />
        <ProductCard
          imgSrc="https://helendo.jamstacktemplates.dev/images/products/artificial-potted-plant/300x300.jpg"
          name="Artificial potted plant"
          namePath=""
          price="40.00"
          imagePath={''}
          outOfStock
        />
        <ProductCard
          imgSrc="https://helendo.jamstacktemplates.dev/images/products/dark-green-jug/300x300.jpg"
          name="Dark Green Jug"
          namePath=""
          price="19.00"
          imagePath={''}
          discount={10}
        />
      </div>
      <TableCard data={[]} header={[tableHeader]} />
      <TableCardItem
        imgSrc="https://helendo.jamstacktemplates.dev/images/products/dark-green-jug/74x74.jpg"
        productName="Dark Green Jug"
        price="30.00"
        quantity={1}
        total="30.00"
      />
      <Footer />
    </Container>
  );
};

export default Home;
