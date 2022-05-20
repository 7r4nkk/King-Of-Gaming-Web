import {useEffect, useState} from 'react';
import { traerProducto } from '../ItemListContainer1/Products';
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    let {id} = useParams();
    useEffect(() => {
        
        traerProducto(id)
            .then((res) =>{
                setProduct(res.find(el=>el.id===id));
            })
            .catch((error) => console.log(error));
    }, [id]);

    return (
        <div>
            <ItemDetail product={product}/>
        </div>
            
    )
}


export default ItemDetailContainer;