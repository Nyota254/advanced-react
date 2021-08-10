import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({image,name,price}) => {
  const url = image && image.url
  return(
  <article className='product'>
    <img src={url || defaultImage} alt={name} />
    <h4>{name}</h4>
    <p>Ksh{price || 0.01}</p>
    </article>
  );
};

Product.propTypes = {
  image:PropTypes.object.isRequired,
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired
}
//Setting Up default props method 1
//Method 2 using short circuit operators

// Product.defaultProps = {
//   name:'Name',
//   price:3.99,
//   image:{url:defaultImage}
// }

export default Product;
