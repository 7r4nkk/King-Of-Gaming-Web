import React from 'react';
import '../../css/ItemListContainer1/ItemListContainer1.css'
import { useEffect, useState } from 'react';
import {processorsAmd} from '../ItemListContainer1/ProcessorsAmd';
import ItemList from '../ItemListContainer1/ItemList1'
const ItemListContainer = (prop) => {
  const [items, setItems] = useState([]);

  useEffect(() => {

    setTimeout(() => {

    const data = new Promise ((resolve, reject) => {
      resolve(processorsAmd);
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