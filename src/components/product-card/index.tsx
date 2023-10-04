/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './product-card.css';
import Badge from '../badge';

interface ProductCardProps {
  outOfStock?: boolean;
  name: string;
  price: string;
  imagePath: string;
  namePath: string;
  imgSrc: string;
  imgWidth?: number;
  imgHeight?: number;
  discount?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  outOfStock = false,
  name,
  price,
  imagePath,
  namePath,
  imgSrc,
  imgWidth = 300,
  imgHeight = 300,
  discount = 0,
}) => {
  return (
    <div className="styled-product-card">
      <div className="styled-product-card-image">
        <a className="styled-product-card-image-a" href={imagePath}>
          <img
            src={imgSrc}
            alt="Product Image"
            width={imgWidth}
            height={imgHeight}
          />
        </a>
        {outOfStock && (
          <div className="styled-product-card-badge-stock">
            <Badge text="Out Of Stock" circleColour="black" />
          </div>
        )}
        {discount !== 0 && (
          <div className="styled-product-card-badge">
            <Badge badgeStyleCircle text="sale" circleColour="orange" />
            <Badge
              badgeStyleCircle
              circleColour="aqua"
              text={`-${discount}%`}
            />
          </div>
        )}

        <div className="styled-product-card-image-icon">
          <button className="styled-product-card-image-button">
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
                stroke-linecap="square"
                stroke-linejoin="round"
                stroke-width="32"
                d="M256 112v288m144-144H112"
              ></path>
            </svg>
          </button>

          <button className="styled-product-card-image-button">
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
                d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
              ></path>
              <path
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M160 224v16a96 96 0 0096 96h0a96 96 0 0096-96v-16"
              ></path>
            </svg>
          </button>

          <button className="styled-product-card-image-button">
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
                d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="styled-product-card-text">
        <h3 className="styled-product-card-text-name">
          <a className="styled-product-card-text-name-a" href={namePath}>
            {name}
          </a>
        </h3>
        <span className="styled-product-card-text-price">{`$${price}`}</span>
      </div>
    </div>
  );
};
// buraya span mı bırakacaksın yanlış olmasın
export default ProductCard;
