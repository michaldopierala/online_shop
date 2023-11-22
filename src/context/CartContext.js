import React, { useState, createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'



export const ShoppingCartContext = createContext()


export default function CartContext({ children }) {

    const [cartItems, setCartItems] = useLocalStorage('cart', [])
    const [cartOpen, setCartOpen] = useState(false)
    const [newProduct, setNewProduct] = useState(false)


    const CartQuantity = cartItems.reduce((total, currentValue) => currentValue.quantity + total, 0)

    function closeModal() {
        setNewProduct(false)
    }

    function closeCart() {
        setNewProduct(false)
        cartOpen ? setCartOpen(false) : setCartOpen(true)
    }


    function increaseCartQuantity(id) {
        setCartItems((currentCart) => {
            if (currentCart.find((item) => item.id === id) == null) {
                newProduct ? setNewProduct(false) : setNewProduct(true)
                return [...currentCart, { id: id, quantity: 1 }]
            } else {
                return currentCart.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id) {
        setCartItems((currentCart) => {
            if (currentCart.find((item) => item.id === id)?.quantity === 1) {
                return currentCart.filter((item) => item.id != id)
            } else {
                return currentCart.map((item) => {
                    if (item.id === id) {
                        return { id: id, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function remove(id) {
        setCartItems((currentCart) => {
            const test = cartItems.filter((item) => item.id !== id)
            return test
        })
    }

    console.log(cartOpen)


    return (
        <ShoppingCartContext.Provider
            value={{
                increaseCartQuantity,
                decreaseCartQuantity,
                remove,
                closeCart,
                CartQuantity,
                cartOpen,
                setCartOpen,
                newProduct,
                // setNewProduct,
                closeModal,
                cartItems
            }}>
            {children}
            {/* <ShoppingCart cartOpen={cartOpen} />
    <ProductAddedModal /> */}
        </ShoppingCartContext.Provider>
    )
}
