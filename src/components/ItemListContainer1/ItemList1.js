import React from 'react'
import '../../css/ItemListContainer1/ItemList1.css'
import Item from '../ItemListContainer1/ProductCardAmdProcessor'

const ItemList = ({items}) => {
return(

    <div className='item-list'>{items.map(iteracion =>{
        return <Item key={iteracion.id} item={iteracion}/>
    })}</div>
    
)}

export default ItemList