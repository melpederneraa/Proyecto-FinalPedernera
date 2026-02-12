import Item from "../item/item";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
