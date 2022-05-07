
import React from 'react';

import './ProductCard.css';

const ProductCard = ({product,handler}) => {
    const {name,price,seller,ratings,img} = product;
    return (
        <div>
            <div className='product-card'>
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-body">
                <h3 className='title mt-3'>{name}</h3>
                <h4 className='price mt-3'>Price : {price}</h4>
                <h4 className='brand mt-3'>Brand : {seller}</h4>
                <h4 className='ratting mt-3'> Rattings: {ratings}</h4>
            </div>
            <div className="product-button">
                
              <button className='py-2' onClick={()=>handler(product)}> Add to Cart</button>
            </div>
        </div>
        </div>
    );
};

export default ProductCard;