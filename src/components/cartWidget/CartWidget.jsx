import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./CartWidget.css"; // Importamos el CSS

const CartWidget = () => {
  const { totalQuantity } = useCart();
  const quantity = totalQuantity();

  return (
    <Link to="/carrito" className="cart-widget">
      🛒
      {quantity > 0 && <span className="cart-badge">{quantity}</span>}
    </Link>
  );
};

export default CartWidget;
