import React from 'react';
import { NavLink } from 'react-router-dom';


const Product = props => {
  const { item } = props;
  const { name, image, short, description, release, complex } = item;

  console.log(props);
  return (
    <li>
      <NavLink to={{ pathname: `/list/${name}`, state: {name, image, description, release, complex}}}>
        <h1>{name}</h1>
        <img src={image} alt={name}/>
        <p>{short}</p>
      </NavLink>
    </li>
  );
}

export default Product;