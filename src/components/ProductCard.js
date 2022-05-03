import ItemCount from './ItemCount';
const ProductCard = () => {
    return (
    <div>
        <div class="card">
            <div class="imgBox">
                <img src="https://www.amd.com/system/files/2020-06/450039-amd-ryzen-7-3rd-gen-PIB-left-facing-1260x709.png" alt="mouse corsair" class="mouse"></img>
            </div>
            <div class="contentBox">
                <h3>Procesador AMD Ryzen 7</h3>
                <h2 class="price">9<small>.99</small> $</h2>
                <a href="#" class="buy">Agregar al carrito</a>
                <div class="addOrdelete">
                    <ItemCount></ItemCount>
                </div>    
            </div>
        </div>
    </div>
    );
};

export default ProductCard;