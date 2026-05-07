import { createContext, useEffect, useState } from "react";

import axios from 'axios';
import { useAuth } from "../hooks/useAuth";

export const CartContext = createContext();

export const CartProvider = ({ children })=>{
    const [cartCount, setCartCount] = useState(0);
    const role = localStorage.getItem('role');
    const { user } = useAuth();

    const fetchCartCount = () => {
        axios.get('http://localhost:5050/cb/v1/api/cart', {
            headers: {
                authorization: localStorage.getItem('token')
            }
        }).then(res => {
            setCartCount(res.data.data ? res.data.data.items.length: 0);
        }).catch(err => console.log(err.response));

        
    };

    useEffect(() => {

        if (user && role === 'customer'){
            axios.get('http://localhost:5050/cb/v1/api/cart', {
                headers:{
                    authorization: localStorage.getItem('token')
                }
            }).then( res => {
                console.log(res.data);
                setCartCount(res.data.data ? res.data.data.items.length : 0);
            }).catch(err => console.log(err));
        }
        
    });

    return(
        <CartContext.Provider value = {{ cartCount, fetchCartCount }}>
            { children }
        </CartContext.Provider>
    );

}