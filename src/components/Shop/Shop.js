
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hook/useProducts';
import { addToDb, localData } from '../../utilities/fakedb';
import ProductCard from '../ProductCard/ProductCard';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import './Shop.css'

const Shop = () => {
    // api loaded state 
    const [getDataApi, setDataApi] = useProducts();
    // cart item seve new arry 
    const [getCart, setCart] = useState([]);

    useEffect(() => {
        const localStore = localData();
        const getLocalItems = [];
        for (const id in localStore) {
            if (id) {
                const cartData = getDataApi.find(product => product.id === id);
                if (cartData) {
                    cartData.quantity = localStore[id];
                    getLocalItems.push(cartData);
                }
            }
        }
        setCart(getLocalItems);
    }, [getDataApi]);

    //  form addToCart button of product 
    const addToCart = (product) => {
        let newCart = [];
        if (product) {
            const exist = getCart.find(cartProduct => cartProduct.id === product.id);
            if (!exist) {
                product.quantity = 1;
                newCart = [...getCart, product];
            } else {
                const rest = getCart.filter(cartProduct => cartProduct.id !== product.id);
                exist.quantity = exist.quantity + 1;
                newCart = [...rest, product]
            }
            setCart(newCart);
            addToDb(product.id);
        }
    }
    const clearCartData = () => {
        localStorage.removeItem('shopping-cart');
    }
    return (

        <div className='shop-page'>

            <div className='product grid grid-cols-2 md:grid-cols-3 gap-5 px-10 py-6'>
                {/* from ProductCard */}
                {
                    getDataApi.map(product => <ProductCard
                        key={product.id}
                        product={product}
                        handler={addToCart}
                    ></ProductCard>)
                }
            </div>
            <div className="cart-page">
                <div>
                    <ShoppingCart
                        addCart={getCart}
                        clearCart={clearCartData}
                    >
                        <Link to={'/order'}> <button>Review Order</button> </Link>
                    </ShoppingCart>
                </div>
            </div>
        </div>
    );
};

export default Shop;