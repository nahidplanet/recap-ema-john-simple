
import React from 'react';
import useCart from '../../Hook/useCart';
import useProducts from '../../Hook/useProducts';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import './Home.css'


const Home = () => {
    const [getDataApi] = useProducts();
    const [getCart] = useCart(getDataApi)
    return (
        <div className='home'>
            <h1>this is home page</h1>
            <div className='bg-indigo-600 h-screen'>
               <ShoppingCart addCart={getCart}></ShoppingCart>
            </div>
        </div>
    );
};

export default Home;