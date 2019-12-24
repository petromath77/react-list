import React from 'react';
import Product from './Product/Product';
import uniqueId from 'uniqid';
import content from '../../content';


const List = (props) => { 
  
  return (
    <ul>
      {content.productList.map(
        item => (
          <Product item={item} key={uniqueId()}/>
        ))}
    </ul>
  );
}

export default List;