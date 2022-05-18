import { createContext, useState } from "react";

export const CartContext = createContext({
    cartItems: [],
    clearCart: ()=>{},
    toggleCartItem: (item)=>{},
    increaseCartItemQuantity: (item)=>{},
    decreaseCartItemQuantity: (item)=>{},
})

export const CartContextProvider = ({children})=>{

    const [cartItems, setCartItems] = useState([])

    const clearCart = ()=>setCartItems([])
    
    const toggleCartItem = (item)=>{

        const _cartItems = [...cartItems]
        
        if(_cartItems.some((favorite)=>favorite.id === item.id)){
            
            return setCartItems(_cartItems.filter((favorite)=>favorite.id !== item.id))
        }

        _cartItems.push(item)
        setCartItems(_cartItems)
    }

    const increaseCartItemQuantity = (item)=>{

        const _cartItems = [...cartItems]

        _cartItems.forEach((cartItem, index)=>{
            if(cartItem.id === item.id){
                cartItem.quantity = cartItem.quantity+1
                cartItem.revenue = cartItem.revenue + ( cartItem.price * 1)
            }
        })
        setCartItems(_cartItems)

    }

    const decreaseCartItemQuantity = (item)=>{

        const _cartItems = [...cartItems]

        _cartItems.forEach((cartItem, index)=>{
            if(cartItem.id === item.id && cartItem.quantity > 1){
                cartItem.quantity = cartItem.quantity-1
                cartItem.revenue = cartItem.revenue - ( cartItem.price * 1)
            }
        })
        setCartItems(_cartItems)

    }

    return(
        <CartContext.Provider value={{cartItems, clearCart,toggleCartItem, increaseCartItemQuantity, decreaseCartItemQuantity}}>
            {children}
        </CartContext.Provider>
    )
    
}