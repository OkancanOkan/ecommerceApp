import React from 'react';
import Text from '../text';
import Breadcrumb from '../breadcrumb';
import { Button } from '../button';
import './read-big-card.css';

interface ReadBigCardProps {
  children: React.ReactNode;
  imgSrc: string;
  productTitle: string;
  buttonLabel: string;
}

const ReadBigCard: React.FC<ReadBigCardProps> = ({
  imgSrc,
  productTitle,
  children,
  buttonLabel,
}) => {
  return (
    <div className="styled-ReadBigCard">
      <a href="" className="styled-ReadBigCard-img">
        <img src={imgSrc} alt={productTitle}></img>
      </a>
      <div className="styled-ReadBigCard-spesifiction">
        <div className="styled-ReadBigCard-spesifiction-header">
          <Text size="xl" colour="black">
            {productTitle}
          </Text>
        </div>
        <div className="styled-ReadBigCard-spesifiction-breadcrumb">
          <Breadcrumb items={[{label: "November 27, 2023/"},{label: "Admin/" },{label: "in deco" }]} />
        </div>
        {children}
        <div className="styled-ReadBigCard-spesipfication-button">
          <Button
            label={buttonLabel}
            onClick={() => {}}
            variant="white"
            colour="black"
          />
        </div>
      </div>
    </div>
  );
};

export default ReadBigCard;
