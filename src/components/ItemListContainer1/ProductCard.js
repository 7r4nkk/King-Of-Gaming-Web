import '../../css/ItemListContainer1/ProductCardAmdProccesor.css'
import { Link } from 'react-router-dom';

const ProductCard = ({productosData}) => {
    return (
    <div className='item'>
        <div className="card">
            <div className="imgBox">
                <img src={productosData.image} alt="" className="product"></img>
            </div>
            <div className="contentBox">
                <h3>{productosData.name}</h3>
                <h4 className="price">{productosData.price}$</h4>
                <button className="agg btnn">VER DETALLE</button>
                <div className="addOrdelete">
                </div>    
            </div>
        </div>
    </div>
    );
};

export default ProductCard;