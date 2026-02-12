import { useState } from "react";
import { useCart } from "../context/CartContext";
import ItemCount from "../itemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    setAdded(true);
  };

  return (
    <div className="detail-container">
      <div className="detail-card">
        <img src={product.imagen} alt={product.nombre} />
        <div className="detail-info">
          <h2>{product.nombre}</h2>
          <p className="detail-price">${product.precio}</p>
          <p className="detail-description">{product.descripcion}</p>

          {!added ? (
            <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
          ) : (
            <p>Producto agregado al carrito</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

