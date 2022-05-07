import { useEffect, useState } from "react";
import { localData } from "../utilities/fakedb";


const useCart = (products) => {
    const [getCart, setCart] = useState([]);
    useEffect(() => {
        const localStore = localData();
        const getLocalItems = [];
        if (localStore) {
            for (const id in localStore) {
                const cartData = products.find(product => product.id === id);
                if (cartData) {
                    cartData.quantity = localStore[id];
                    getLocalItems.push(cartData);
                }
            }
            setCart(getLocalItems);
        }
    }, [products]);
    return [getCart,setCart];
};


export default useCart;