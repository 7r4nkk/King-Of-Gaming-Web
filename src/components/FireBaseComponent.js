import React, {useEffect} from 'react';
import {collection, getDoc} from '../firebase/firebase';
import { db } from './utils/firebaseConfig';

const FireBaseComponent = () => {
    useEffect(() => {
        const getData = async () => {
            const query = collection(db, 'productos');
            const response = await getDocs(query);
            console.log(response);
            const dataProductos = response.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
            console.log(dataProductos);
        }
        getData();
    }, []);
    return (
        <div>
            <h1>FireBaseComponent</h1>
        </div>
    );
}
export default FireBaseComponent;