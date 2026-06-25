import { useProducts } from "../context/useProducts";

const CustomerPage = () => {
  const { products, error, loading } = useProducts();

  // Match the same loading/error flow used on the products screen for a more consistent SPA.
  if (loading) return <p className="text-slate-600">Loading customers...</p>;
  if (error) return <p className="text-rose-600">{error}</p>;

  return (
    <div className="text-2xl text-slate-600">
      {products.map((product) => (
        <div key={product.id}>
          <div className="grid grid-cols-4 justify-center items-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-20 h-20 rounded-full"
            />
            <span>{product.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerPage;
