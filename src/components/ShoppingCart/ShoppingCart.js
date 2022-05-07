import React from 'react';
import './ShoppingCart.css'

const ShoppingCart = (props) => {
    const {addCart,clearCart} = props;
    console.log(props);
    const quantity = addCart.reduce((x,y) => x+ y.quantity,0);

    const price = addCart.reduce((x,y) => x+ y.price *quantity,0);
    const shipping = addCart.reduce((x,y) => x+ y.shipping,0);
    const tax = parseInt(((price+shipping)*0.1).toFixed(2));
    const total = (price+shipping+ tax);
  
    return (
        <div>
            <div className="details">
                <h3>Order Summary</h3>
                <ul>
                    <li>Selected Items: <span>{quantity}</span></li>
                    <li>Total Price: $<span>{price}</span></li>
                    <li>Total Shipping Charge: $<span>{shipping}</span></li>
                    <li>Tax: <span>{tax}</span></li>
                </ul>
                <h2>Grand Total: $<span>{total}</span></h2>
            </div>
            <div className="group-btn">
                <div className="clear">
                    <button onClick={clearCart}>Clear Cart</button>
                </div>
                <div className="review-order">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart; 