import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ product }) => {
  return (
    <div className="item-card">
      <img src={product.imagen} alt={product.nombre} />
      <h3>{product.nombre}</h3>
      <p>${product.precio}</p>
      <Link to={`/item/${product.id}`} className="btn-detail">
        Ver detalle
      </Link>
    </div>
  );
};

export default Item;
