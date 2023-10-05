import React from 'react';
import './table-card.css';
import TableCardItem from '../table-card-item';

interface TableCardProps {
  header: [];
  data: [];
}

const TableCard: React.FC<TableCardProps> = ({ header, data }) => {
  return (
    <div className="styled-tableCard">
      <div className="styled-tableCard-productName">productName</div>
      <div className="styled-tableCard-price">Price</div>
      <div className="styled-tableCard-quantity">Quantity</div>
      <div className="styled-tableCard-total">Total</div>
      {data.map((item, index) => (
        <div key={index} className="styled-tableCard-item">
          <TableCardItem
            imgSrc={item.imgSrc}
            productName={item.productName}
            price={item.price}
            quantity={item.quantity}
            total={item.total}
          />
        </div>
      ))}
    </div>
  );
};

export default TableCard;
