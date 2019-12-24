import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductDetail = (props) => {

  const state = props.location.state;
  
  console.log(props);
  return (
    <>
      <NavLink to="/list">Go Back</NavLink>
      <h1>{state.name}</h1>
      <img src={state.image} alt={state.name} />
      <p>{state.description}</p>
      <p>{state.complex}</p>
      <p>{state.release}</p>
      </>
    );
}

export default ProductDetail;