import React from 'react';
import './read-card.css';
import Text from '../text';
import Breadcrumb from '../breadcrumb';

interface ReadCardProps {
  imgSrc: string;
  productTitle: string;
}

const ReadCard: React.FC<ReadCardProps> = ({
  imgSrc,
  productTitle,
}) => {
  return (
    <div className="styled-readCard">
      <a href="" className="styled-readCard-img">
        <img src={imgSrc} alt={productTitle}></img>
        </a>
        <div className="styled-readCard-title">
          <Text size={'l'} colour={'black'}>
            {productTitle}
          </Text>
        </div>
        <div className='styled-readCard-breadcrumb'>
        <Breadcrumb items={[{label: "November 27, 2023 / "},{label: " Admin / " },{label: "in deco" }]} />

        </div>
    </div>
  );
};

export default ReadCard;
