import React from 'react'
import '../../css/ItemDetailContainer/ItemDetail.css'
import ItemCount from '../ItemCount'
const ItemDetail = ({product}) => {
return (
    <div className='bodyy'>
        <div className='container'>
            <div className='imgBx'>
                <img src={product.image}></img>
            </div>
            <div className='details'>
                <div className='content'>
                    <h2>{product.name}<br></br><span>{product.subname}</span></h2>
                    <p>{product.details}</p>
                    <h3>{product.price}$</h3>
                    <button className="agg btnn">AGREGAR AL CARRITO</button>
                    <ItemCount></ItemCount>
                </div>
            </div>
        </div>
    </div>
)
}

export default ItemDetail