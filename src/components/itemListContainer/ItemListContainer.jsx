import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import ItemList from "../itemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);
    const ref = collection(db, "products");
    const q = categoriaId ? query(ref, where("categoria", "==", categoriaId)) : ref;

    getDocs(q)
      .then(res => setProducts(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [categoriaId]);

  if (loading) return <p className="loader">Cargando productos...</p>;

  return (
    <div className="items-container">
      <h2 className="items-title">{categoriaId ? categoriaId.toUpperCase() : "Todos los productos"}</h2>
      <div className="items-grid">
        <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;


