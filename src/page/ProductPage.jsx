import { useProducts } from "../context/useProducts";
import ProductCard from "../components/ProductCard";

function ProductPage() {
  const { products, loading, error } = useProducts();

  if (loading) return <p className="text-slate-600">Loading Products ...</p>;
  if (error) return <p className="text-rose-600">{error}</p>;

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductPage;
