import React from 'react';
import './table-card-item.css';
import CounterButton from '../counter-button';

interface TableCardItemProps {
  imgSrc: string;
  productName: string;
  price: string;
  quantity: number;
  total: string;
}

const TableCardItem: React.FC<TableCardItemProps> = ({
  imgSrc,
  productName,
  price,
  quantity = 0,
  total,
}) => {
  return (
    <div className="styled-tableCardItem">
      <div className="styled-tableCardItem-leftGroup">
        <a href="" className="styled-tableCardItem-img">
          <img src={imgSrc} alt={productName}></img>
        </a>
        <span className="styled-tableCardItem-productName">{productName}</span>
      </div>
      <div className="styled-tableCardItem-rightGroup">
        <span className="styled-tableCardItem-price">{`$${price}`}</span>
        <span className="styled-tableCardItem-quantity">
          <CounterButton
            count={quantity}
            setCount={() => {}}
            border
            fontSize={20}
            fsDecrement={20}
            fsIncrement={20}
          />
        </span>
        <span className="styled-tableCardItem-total">{`$${total}`}</span>
        <button className="styled-tableCardItem-cancel">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M368 368L144 144m224 0L144 368"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TableCardItem;
