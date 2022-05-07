import React from 'react'
import '../css/ItemList.css'
import Item from './ProductCard'

const ItemList = ({items}) => {
return (
    <div className='item-list'>{items.map(iteracion =>{
        return <Item key={iteracion.id} item={iteracion}/>
    })}</div>
)
}

export default ItemList