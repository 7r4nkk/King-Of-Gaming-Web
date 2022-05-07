import '../css/ProductCard.css'
import ItemCount from './ItemCount';
const ProductCard = ({item}) => {
    const {name, price, image} = item;
    return (
    <div className='item'>
        <div class="card">
            <div class="imgBox">
                <img src={image} alt="" class="product"></img>
            </div>
            <div class="contentBox">
                <h3>{name}</h3>
                <h2 class="price">{price}$</h2>
                <button class="agg btnn">AGREGAR AL CARRITO</button>
                <div class="addOrdelete">
                    <ItemCount></ItemCount>
                </div>    
            </div>
        </div>
    </div>
    );
};

export default ProductCard;