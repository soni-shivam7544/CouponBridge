import { createContext, useEffect, useState } from "react";

import axios from 'axios';
import { useAuth } from "../hooks/useAuth";

export const CartContext = createContext();

export const CartProvider = ({ children })=>{
    const [cartCount, setCartCount] = useState(0);
    const { user } = useAuth();

    const fetchCartCount = () => {
        axios.get('http://localhost:5050/cb/v1/api/cart', {
            headers: {
                authorization: localStorage.getItem('token')
            }
        }).then(res => {
            setCartCount(res.data.data.items.length);
        }).catch(err => console.log(err.response));

        
    };

    useEffect(() => {

        if (user){
            axios.get('http://localhost:5050/cb/v1/api/cart', {
                headers:{
                    authorization: localStorage.getItem('token')
                }
            }).then( res => {
                console.log(res.data.data);
                setCartCount(res.data.data.items.length);
            }).catch(err => console.log(err.response));
        }
        
    },[]);

    return(
        <CartContext.Provider value = {{ cartCount, fetchCartCount }}>
            { children }
        </CartContext.Provider>
    );

}