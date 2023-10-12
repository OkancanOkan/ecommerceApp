import React from 'react';
import './cart-card.css';

interface CartCardProps {
  imgSrc: string;
  productName: string;
  qty: number;
  price: string;
}

const CartCard: React.FC<CartCardProps> = ({
  imgSrc,
  productName,
  qty,
  price,
}) => {
  return (
    <div className="styled-cartCard">
      <a href="" className="styled-cartCard-img">
        <img src={imgSrc} alt={productName}></img>
      </a>
      <div className="styled-cartCard-product">
        <span className="styled-cartCard-product-spesification">
          {productName}
        </span>
        <div className="styled-cartCard-product-spesification">
          Qty :{' '}
          <span className="styled-cartCard-product-spesification-color">
            {qty}
          </span>
        </div>
        <div className="styled-cartCard-product-spesification">
          Price :{' '}
          <span className="styled-cartCard-product-spesification-color">{`$${price}`}</span>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
