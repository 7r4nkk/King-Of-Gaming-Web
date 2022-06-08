import React, { useContext } from "react";
import "../../css/Cart/CartList.css"
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const CartList = () => {
const { cartList, totalBuy, removeProduct, emptyCart,} = useContext(CartContext);

return (
<div className="container cartList" data-aos="fade-up" data-aos-duration="500">
    <div className="row mt-3 tabla justify-content-center text-center">
        <div className="col-lg-3 col-sm-2"></div>
        <h5 className="col-lg-4 col-sm-2">Nombre:</h5>
        <h5 className="col-lg-1 col-sm-2">Precio:</h5>
        <h5 className="col-lg-1 col-sm-2">Cantidad:</h5>
        <h5 className="col-lg-2 col-sm-1">Subtotal:</h5>
        <div className="col-lg-1 col-sm-1"></div>
    </div>
    <hr></hr>
    <div className="row justify-content-center text-center">
        {cartList.map((product) => (
        <div className="row align-items-center" key={product.id}>
            <div className="col-lg-3 div-img col-sm-3">
                    <img className="img-cart" src={product.image} alt={product.name} style={{ width: 150 }}></img>
            </div>
            <div className="px-0 col-lg-4 col-sm-2">
                <h5>"{product.name.substring(0, product.name.length)}"</h5>
            </div>
            <div className="col-lg-1 precio col-sm-2">
                <h5>${product.price}</h5>
            </div>
            <div className="col-lg-1 col-sm-2">
                <h5>{product.cantidad}</h5>
            </div>
            <div className="col-lg-2 col-sm-2">
              <h5>${product.cantidad * product.price}</h5>
            </div>
            <div className="col-lg-1 col-sm-2">
                <button className="vaciarCarrito eliminar" onClick={() => removeProduct(product.id)}>Eliminar{" "}</button>
            </div>
            <hr></hr>
        </div>
        ))}
        <h3><b>Precio Total:</b></h3>
        <h4 className="text-center"><b>${totalBuy()}</b></h4>
        <div className="d-flex justify-content-center mt-5">
            <button className="vaciarCarrito me-3 cartListbtn" onClick={emptyCart}>Vaciar Carrito</button>
            <Link to="/shop">
                <button className="procesarCompra ms-3 cartListbtn">Procesar Compra</button>
            </Link>
        </div>
    </div>
</div>
);
};

export default CartList;
