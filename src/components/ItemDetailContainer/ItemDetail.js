import React, { useContext, useState } from 'react'
import '../../css/ItemDetailContainer/ItemDetail.css'
import ItemCount from '../ItemCount'
import { Button } from "@mui/material";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";


const ItemDetail = ({product}) => {
    /* const [count, setCount] = useState(1); */
    const [goToCart, setGoToCart] = useState(false);
    const {addToCart} = useContext(CartContext);

const onAdd = (cantidad) => {
    setGoToCart(true);
    addToCart({...product, cantidad: cantidad})
};
return (
    <div className='bodyy'>
        <div className='containerdetail'>
            <div className='imgBx'>
                <img src={product.image}></img>
            </div>
            <div className='details'>
                <div className='content'>
                    <h2>{product.name}<br></br><span>{product.subname}</span></h2>
                    <p>{product.details}</p>
                    <h3>{product.price}$</h3>
                    {!goToCart ? (<ItemCount initial={1} stock={5} onAdd={onAdd} />) : (
                        <div className="d-flex justify-content-center">
                            <Link to={`/cart`} style={{ textDecoration: 'none' }}>
                                <Button variant="outlined" color='success'>Ir al carrito</Button>
                            </Link>
                            <Link to={`/`} style={{ textDecoration: 'none' }}>
                                <Button variant="outlined" color='success'>Seguir comprando</Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
)
}

export default ItemDetail