import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../utils/firebaseConfig';
import {collection, query, where, getDocs, documentId} from 'firebase/firestore';
import ItemDetail from "./ItemDetail";
import Footer from "../Footer";
import Loading from "../Loading";


const ItemDetailContainer = () => {
    const [isLoading, setIsLoading] = useState(true);
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
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        }, [id]);
    return (
        <>
            {isLoading ? (
                <div className='loading'>
                    <Loading/>
                </div>
            ):(
                <div>
                    {productosData.map((data) => {
                        return (
                            <ItemDetail key={data.id} productosData={data}/>
                        )
                    })}
                    <Footer></Footer>
                </div>
            )}
        </>
    )
}
        
export default ItemDetailContainer;