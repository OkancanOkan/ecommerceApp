import React from 'react'
import  "./read-product.css"
import { Button } from '../button'
import TitleLine from '../title-line'

interface ReadProductProps {
    imgSrc:string,
    productName:string,
    price:string,
    children:React.ReactNode,
}
const ReadProduct:React.FC<ReadProductProps> = ({children, price,productName,imgSrc}) => {
  return (
    <div className='styled-readProduct'>
        <a href="" className="styled-readProduct-img">
          <img src={imgSrc} alt={productName}></img>
        </a>
        <div className='styled-readProduct-spesification'>
            <span className='styled-readProduct-spesification-featured'>FEATURED PRODUCT</span>
            <div className='styled-readProduct-spesification-productName'><TitleLine text={productName} /></div>
            <p className='styled-readProduct-spesification-description'>{children}</p>
            <div className='styled-readProduct-spesification-button'><Button label={`Only $${price}`} onClick={()=>{}} variant='white' colour='black' width={150} icon="rightArrow" /></div>
        </div>
    </div>
  )
}

export default ReadProduct