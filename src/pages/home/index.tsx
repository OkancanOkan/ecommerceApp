import React, { useState } from 'react';
import Container from '../../components/container';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import ProductCard from '../../components/product-card';
import './home.css';
import TableCardItem from '../../components/table-card-item';
import TableCard from '../../components/table-card';
import TitleLinks from '../../components/title-links';
import CartCard from '../../components/cart-card';
import ReadProduct from '../../components/read-product';
import ReadBigCard from '../../components/read-big-card';
import ReadCard from '../../components/read-card';

const Home = () => {
  const tableHeader = [
    {
      id: 1,
      title: '',
      fieldName: 'imgSrc',
    },

    {
      id: 2,
      title: 'Product',
      fieldName: 'productName',
    },
    {
      id: 3,
      title: 'Price',
      fieldName: 'price',
    },
    {
      id: 4,
      title: 'Quantity',
      fieldName: 'quantity',
    },
    {
      id: 5,
      title: 'Total',
      fieldName: 'total',
    },
  ];

  const tableData = [
    {
      id: 1,
      productName: 'Art Deco Home',
      imgSrc:
        'https://helendo.jamstacktemplates.dev/images/products/art-deco-home/74x74.jpg',
      price: '30.00',
      quantity: 1,
      total: '30.00',
    },
    {
      id: 2,
      productName: 'Art Deco Home',
      imgSrc:
        'https://helendo.jamstacktemplates.dev/images/products/art-deco-home/74x74.jpg',
      price: '30.00',
      quantity: 1,
      total: '30.00',
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
      <TableCard data={tableData} header={tableHeader} />
      <br />
      <br />
      <CartCard
        price="30.00"
        qty={5}
        productName="Art Deco Home"
        imgSrc="https://helendo.jamstacktemplates.dev/images/products/art-deco-home/74x74.jpg"
      />
      <ReadProduct
        imgSrc={
          'https://helendo.jamstacktemplates.dev/images/featured-product/nancy-chair.png'
        }
        productName={'Nancy Chair'}
        price={'90.00'}
        children={
          <p>
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia.
          </p>
        }
      />

      <ReadBigCard
        children={<p>
          Contrary to popular belief, Lorem Ipsum indignation and dislike men
          who are so beguiled and demoralized by the charms of pleasure of the
          moment, so blinded by desire, that they cannot foresee the pain and
          trouble that are bound to ensue; and equal blame belongs to those
          who fail in…
        </p>} imgSrc={'	https://helendo.jamstacktemplates.dev/images/blogs/unique-products/1146x745.jpg'} productTitle='Unique products that will impress your home in 2023.' buttonLabel={'Read More'}      />

<ReadCard imgSrc='https://helendo.jamstacktemplates.dev/images/blogs/unique-products/374x243.jpg' productTitle='Unique products that will impress your home in 2023.' />
      <Footer />
    </Container>
  );
};

export default Home;
