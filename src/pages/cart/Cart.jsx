import { Link } from "react-router-dom";
import { useCart } from "../../components/context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, clear, totalPrice } = useCart();

  if (cart.length === 0) return <div className="cart-container"><h2>El carrito está vacío</h2></div>;

  return (
    <div className="cart-container">
      <h2 className="cart-title">Tu carrito</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.imagen} alt={item.nombre} />
          <div className="cart-info">
            <h3>{item.nombre}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>${item.precio * item.quantity}</p>
          </div>
          <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
      ))}
      <div className="cart-total"><h3>Total: ${totalPrice()}</h3></div>
      <div className="cart-actions">
        <button className="btn" onClick={clear}>Vaciar carrito</button>
        <Link to="/checkout"><button className="btn">Finalizar compra</button></Link>
      </div>
    </div>
  );
};

export default Cart;
