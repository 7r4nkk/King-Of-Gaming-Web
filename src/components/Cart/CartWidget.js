import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {
  const { cartList, cartCounter } = useContext(CartContext);
  return (
    <div>
      <button type="button" className="btn btn-success btn-lg"><i className="uil uil-shopping-cart"></i></button>
      {cartList.length === 0 ? (
        <span></span>
      ) : (
        <Badge pill bg="danger">
          {cartCounter()}
        </Badge>
      )}
    </div>
  )
}

export default CartWidget