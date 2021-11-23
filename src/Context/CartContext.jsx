import React, {useContext, createContext, useState} from "react"

const CartContext = createContext([]);

export const UseCartContext = () => {useContext(CartContext)}

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, qnt) =>{
        if(isInCart(item)){
            let newCart = cart;
            newCart.forEach( cartItem => {
                if(cartItem.id === item.id){
                    cartItem.qnt += qnt;
                }
            })
            setCart(newCart)
        }else{
            setCart([...cart, {...item, qnt}])
        }

    }

    const removeItem = (itemId) =>{
        setCart(cart.filter((item) => item.id !== itemId));
    }

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (item) =>{
        return cart.some(cartItem => cartItem.id === item.id)
    }

    return <CartContext.Provider value={{
        cart,
        addItem,
        removeItem,
        clearCart
    }}>
    {children}
    </CartContext.Provider>
}

export default CartProvider