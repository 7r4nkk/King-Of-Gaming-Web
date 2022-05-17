import React from 'react';
import '../../css/ItemListContainer1/ItemListContainer1.css'
import { useEffect, useState } from 'react';
import {traerProductos} from './Products';
import { useParams } from 'react-router-dom';
import Loader from '../Loader'
import ItemList from '../ItemListContainer1/ItemList1'

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const {categoriaId} = useParams();
  useEffect(() => {
    traerProductos(categoriaId)
    .then((res) => {
      setProducts(res);
    })
    .catch((error) => console.log(error))
    
    setTimeout(() => {
        setIsLoading(false);
    },1600);
  }, [categoriaId]);
  return (
    <div className='body'>
      {isLoading ? (<Loader/>) : (<ItemList products={products}/>) }
      
        
    </div>
  )
}

export default ItemListContainer