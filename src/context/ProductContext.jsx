import { useEffect, useState } from "react";
import { ProductContext } from "./product-context";

// Secondly, create the context function (business logic)
export function ProductProvider({ children }) {
  // create states, 1 to store the products data when they come, one to store the loading state and the last to store the error state (note that all this will come from the BE data)
  const [products, setProducts] = useState([]); // [empty array]
  const [loading, setLoading] = useState(true); // loader has to showing
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        // Surface non-200 responses as real errors instead of treating them like valid data.
        if (!res.ok) {
          throw new Error("Failed to load products");
        }

        const data = await res.json();
        setProducts(data); // products = data
      } catch (err) {
        // Store a plain message so our pages can render the error safely.
        setError(err.message || "Failed to load products");
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}
