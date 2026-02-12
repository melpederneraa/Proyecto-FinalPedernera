import { useState } from "react";
import { useCart } from "../../components/context/CartContext";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import "./CheckoutForm.css";

const CheckoutForm = () => {
  const { cart, totalPrice, clear } = useCart();
  const navigate = useNavigate();
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => setBuyer({ ...buyer, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!buyer.name || !buyer.email || !buyer.phone) return alert("Completa todos los campos");

    const order = {
      buyer,
      items: cart,
      total: totalPrice(),
      date: Timestamp.fromDate(new Date())
    };

    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clear();
    } catch (err) {
      console.log(err);
      alert("Error al generar la orden");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="loader">Generando orden...</p>;
  if (orderId) return <p className="loader">¡Gracias por tu compra! Tu ID de orden: {orderId}</p>;

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" value={buyer.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={buyer.email} onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Teléfono" value={buyer.phone} onChange={handleChange} />
        <button type="submit">Finalizar compra</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
