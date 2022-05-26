import '../../css/ItemListContainer1/ProductCardAmdProccesor.css'
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    return (
    <div className='item'>
        <div className="card">
            <div className="imgBox">
                <img src={product.image} alt="" className="product"></img>
            </div>
            <div className="contentBox">
                <h3>{product.name}</h3>
                <h4 className="price">{product.price}$</h4>
                <Link to={`/detail/${product.id}`}>
                    <button className="agg btnn">VER DETALLE</button>
                </Link>
                <div className="addOrdelete">
                </div>    
            </div>
        </div>
    </div>
    );
};

export default ProductCard;