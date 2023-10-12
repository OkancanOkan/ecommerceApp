import React from 'react';
import './table-card.css';
import TableCardItem from '../table-card-item';


interface TableCardProps {
  header: TableHeaderProps[] 
  data: TableDataProps[];
}
interface TableDataProps{
  imgSrc:string,
  productName:string,
  price:string,
  quantity:number,
  total:string
}

interface TableHeaderProps{
  id:number,
  title:string,
  fieldName :string,
}
const TableCard: React.FC<TableCardProps> = ({ header, data }) => {

  
  return (    
    <>
    <div className="styled-tableCard">
      {header.map((item)=>(
        <div className="styled-tableCard-header">{item.title}</div> 
      ))}
    </div>
        <div className="styled-tableCard-item">
      {data.map((item) => ( 
          <TableCardItem
            imgSrc={item.imgSrc}
            productName={item.productName}
            price={item.price}
            quantity={item.quantity}
            total={item.total}
          />
      ))}
        </div>
    </>

  );
};

export default TableCard;
