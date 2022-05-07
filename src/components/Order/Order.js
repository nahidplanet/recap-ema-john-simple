    import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hook/useCart';
import useProducts from '../../Hook/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
    
    const Order = () => {
        const [getDataApi,setDataApi] =  useProducts();
        const [getCart,setCart] = useCart(getDataApi);
        const deleteItem = (id) => {
            if (id) {
                const rest = getCart.filter( deleteProduct => deleteProduct.id !== id);
                setCart(rest)
            }
            removeFromDb(id);
            
        }
        return (
            <div className='shop-page'>

            <div className='product grid grid-cols-2 md:grid-cols-3 gap-5 px-10 py-6'>
               
                <div className=''>
                {
                    getCart.map(item => <ReviewItem key={item.id} item={item} deleteItem={deleteItem}></ReviewItem>)
                }
                </div>
            </div>
            <div className="cart-page">
                <div>
                   
                    <ShoppingCart
                        addCart={getCart}
                        
                    >
                         <Link to={'/inventory'}> <button>Check Out</button> </Link>
                    </ShoppingCart>
                </div>
            </div>
        </div>
        );
    };
    
    export default Order;