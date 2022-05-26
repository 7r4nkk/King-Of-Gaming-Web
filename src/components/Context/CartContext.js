import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
const [cartList, setCartList] = useState([]);

function addToCart(product) {
    const index = cartList.findIndex((p) => p.id === product.id);

    if (index > -1) {
    const oldItem = cartList[index].cantidad;
    cartList.splice(index, 1);
    setCartList([
        ...cartList,
        { ...product, cantidad: product.cantidad + oldItem },
    ]);
    } else {
        setCartList([...cartList, product]);
    }
}

const removeProduct = (id) => {
    const filteredCart = cartList.filter((product) => product.id !== id);
    localStorage.removeItem(filteredCart);
    setCartList(filteredCart);
    if (cartList.length === 1){
        limpiarLs();
    }
};

function emptyCart() {
    setCartList([]);
    limpiarLs();
}

  // Contador carrito
const cartCounter = () => {
    addLocalStorage();
    return cartList.reduce((prev, product) => prev + product.cantidad, 0);
};
  // Subtotal compra
const totalBuy = () => {
    return cartList.reduce(
      (prev, product) => prev + product.cantidad * product.price,
    0
    );
};

function addLocalStorage(){
    localStorage.setItem("carrito",JSON.stringify(cartList));
}
window.onload = function(){
    const cartList = JSON.parse(localStorage.getItem("carrito"));
    if(cartList){
        setCartList(cartList);
    }
}
function limpiarLs(){
    addLocalStorage(cartList);
    localStorage.clear();
}
return (
    <CartContext.Provider
    value={{
        cartList,
        addToCart,
        removeProduct,
        emptyCart,
        cartCounter,
        totalBuy,
    }}
    >
    {children}
    </CartContext.Provider>
);
};

export default CartContextProvider;