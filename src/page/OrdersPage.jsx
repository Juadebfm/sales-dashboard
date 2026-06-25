import RecentOrders from "../components/RecentOrders";

const OrdersPage = () => {
  return (
    <>
      {/* Reuse the existing table here so the Orders route has meaningful page content. */}
      <RecentOrders />
    </>
  );
};

export default OrdersPage;
