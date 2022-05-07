import React from 'react';
import '../css/ItemListContainer.css'
import { useEffect, useState } from 'react';
import {prodamd} from './ProductosAmd.js';
import ItemList from './ItemList.js'
const ItemListContainer = (prop) => {
  const [items, setItems] = useState([]);

  useEffect(() => {

    setTimeout(() => {

    const data = new Promise ((resolve, reject) => {
      resolve(prodamd);
    });
      data.then(data =>{
      setItems(data);
    });
    data.catch(err => {
      console.log(err);
    });
  }, 2000);
  }, []);
  return (
    <div className='body'>
        <h1>{prop.titulo}</h1>
        <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer