import React from 'react';
import '../../css/ItemListContainer/ItemListContainer.css'
import { useEffect, useState } from 'react';
import { db } from '../utils/firebaseConfig';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import ProductCard from './ProductCard';
import LinearIndeterminate from '../Loading';
import {Link, useParams} from 'react-router-dom'
import Footer from '../Footer';

const ItemListContainer = () => {
  const [productosData, setProductosData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const categoria = useParams();
  const productosCategoria = categoria.categoria;
  
  useEffect(() => {
    const getProductos = async () => {
      const q = query(
        collection(db, 'productos'),
        orderBy("orden" , "asc"),
        where('categoria', '==', productosCategoria),
        );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id});
      });
      setProductosData(docs);
      
    }
    getProductos();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [productosCategoria]);
        
      return(
          <div className='itemListGlobal'>
            {isLoading ? (
              <div className='loading'>
                <LinearIndeterminate/>
              </div>
            ):(
              <div>
                <div className='body'>
                  {productosData.map((data) => {
                    return( 
                      <Link
                        to={`/details/${data.id}`}
                        key={data.id}
                        style={{ textDecoration: 'none' }}
                      >  
                        <ProductCard productosData={data}/>
                      </Link>  
                    )
                  })}
                
                </div>
              <Footer/>   
              </div>  
            )}
            
          </div>
      )
}

export default ItemListContainer;