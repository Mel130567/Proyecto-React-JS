import React, {useContext, createContext, useState} from "react"

const CartContext = createContext([]);

export const UseCartContext = () => {return useContext(CartContext)}

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item) =>{
        
        if(isInCart(item)){
            let cartIndex = cart.findIndex(i => i.id === item.id)            
            if (cartIndex !== -1) {
                const newCart = cart;
                const newItem = newCart[cartIndex].qnt + item.qnt;
                cart.splice(cartIndex, 1)
                setCart([...cart, {...item, qnt: newItem}]);
            }            
        }else{
            setCart([...cart, item])
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

    const itemCounter = () =>{
        return cart.reduce((accum, item) => accum = accum + item.qnt, 0)
    }
    const totalPrice = () => {
        return cart.reduce((total, item) => (total +  (item.price * item.qnt)), 0)
    }

    return <CartContext.Provider value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        itemCounter,
        totalPrice
    }}>
    {children}
    </CartContext.Provider>
}

export default CartProvider