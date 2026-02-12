import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import ItemDetail from "../itemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    if (!itemId) return;
    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then(res => res.exists() && setProduct({ id: res.id, ...res.data() }))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <p className="loader">Cargando producto...</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
