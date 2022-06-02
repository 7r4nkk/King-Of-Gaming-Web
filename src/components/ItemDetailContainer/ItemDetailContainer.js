import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../utils/firebaseConfig';
import {collection, query, where, getDocs, documentId} from 'firebase/firestore';
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [productosData, setProductosData] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        const getProductos = async () => {
            const q = query(collection(db, 'productos'), where(documentId(), '==', id));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id});
            });
            setProductosData(docs);
        }
        getProductos();
        }, [id]);
    return (
        <>
            {productosData.map((data) => {
                return (
                    <ItemDetail key={data.id} productosData={data}/>
                )
            })}
        </>
    )
}
        
export default ItemDetailContainer;