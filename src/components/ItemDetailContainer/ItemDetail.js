import React, { useContext, useState } from 'react'
import '../../css/ItemDetailContainer/ItemDetail.css'
import ItemCount from './ItemCount'
import '../../css/ItemDetailContainer/ItemCount.css'
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";


const ItemDetail = ({productosData}) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addToCart} = useContext(CartContext);

const onAdd = (cantidad) => {
    setGoToCart(true);
    addToCart({...productosData, cantidad: cantidad})
};
return (
    <div className='bodyy'>
        <div className='containerdetail' data-aos="fade-up" data-aos-duration="500">
            <div className='imgBx'>
                <img src={productosData.image} className='imgdetail' alt=''></img>
            </div>
            <div className='details'>
                <div className='content'>
                    <h2>{productosData.name}<br></br><span>{productosData.subname}</span></h2>
                    <p>{productosData.details}</p>
                    <h3>{productosData.price}$</h3>
                    {!goToCart ? (<ItemCount initial={1} stock={5} onAdd={onAdd} />) : (
                        <div className="d-flex justify-content-center botones">
                            <Link to={`/cart`} style={{ textDecoration: 'none' }}>
                                <button className="agg btnn btns" variant="outlined" color='success'>Ir al carrito</button>
                            </Link>
                            <Link to={`/`} style={{ textDecoration: 'none'}}>
                                <button className="agg btnn btns" variant="outlined" color='success'>Seguir comprando</button>
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