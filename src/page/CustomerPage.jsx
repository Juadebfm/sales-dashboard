import { useProducts } from "../context/useProducts";
import ProductCard from "../components/ProductCard";

const CustomerPage = () => {
  const { products, error, loading } = useProducts();

  console.log(products);

  // Match the same loading/error flow used on the products screen for a more consistent SPA.
  if (loading) return <p className="text-slate-600">Loading customers...</p>;
  if (error) return <p className="text-rose-600">{error}</p>;

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Product Catalog
        </h2>
        <p className="text-sm text-slate-500">
          Fake Store API products displayed as proper storefront cards.
        </p>
      </div>

      {/* Swap the raw image/title rows for the shared card grid so this page reads like a real products screen. */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default CustomerPage;
