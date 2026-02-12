import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [error, setError] = useState("");

  const increment = () => {
    if (count < stock) { setCount(count + 1); setError(""); }
    else setError("No hay más stock disponible");
  };
  const decrement = () => { if (count > 1) { setCount(count - 1); setError(""); } };
  const handleAdd = () => onAdd(count);

  return (
    <div className="item-count">
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={handleAdd}>Agregar al carrito</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default ItemCount;
