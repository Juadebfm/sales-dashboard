import RecentOrders from "../components/RecentOrders";
import RevenueChart from "../components/RevenueChart";

const Overview = () => {
  return (
    <>
      {/* <div>
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div> */}
      <RevenueChart />
      <RecentOrders />
    </>
  );
};

export default Overview;
