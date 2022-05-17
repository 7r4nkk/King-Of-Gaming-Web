import React from 'react'
import '../../css/ItemListContainer1/ItemList1.css'
import Item from './ProductCard'

const ItemList = ({products}) => {
return(

    <div className='item-list'>
        {products.map((prod) => (
            <Item product={prod} key={prod.id} />
        ))}
    </div>
    
)
}

export default ItemList