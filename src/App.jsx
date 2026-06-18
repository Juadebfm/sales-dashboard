import React from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import RevenueChart from "./components/RevenueChart";
import RecentOrders from "./components/RecentOrders";

const App = () => {
  
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar />
      <div className="flex-1">
        <TopBar />
        <main className="p-6 space-y-6">
          <div className="grid grid-cols-4"></div>
          <RevenueChart />
          <RecentOrders />
        </main>
      </div>
    </div>
  );
};

export default App;
