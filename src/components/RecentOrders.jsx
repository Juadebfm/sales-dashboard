import React, { useState } from "react";
import { orders } from "../data/data";
import { Search } from "lucide-react";
import StatusBadge from "./StatusBadge";

const RecentOrders = () => {
  // UseState
  const [query, setQuery] = useState("");

  //helper functions
  const filtered = orders.filter((order) =>
    order.customer.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-900">Recent Orders</h3>
        <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-1.5">
          <Search size={15} className="text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Customer..."
            className="text-sm outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      <table className="mt-4 w-full text-sm">
        <thead>
          <tr className="text-left text-slate-400">
            <th className="pb-2 font-medium">Order</th>
            <th className="pb-2 font-medium">Customer</th>
            <th className="pb-2 font-medium">Amount</th>
            <th className="pb-2 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((o) => (
            <tr key={o.id} className="border-t border-slate-100">
              <td className="py-3 font-medium text-slate-700">{o.id}</td>
              <td className="py-3 font-medium text-slate-700">{o.customer}</td>
              <td className="py-3 font-medium text-slate-700">{o.amount}</td>
              <td className="py-3 font-medium text-slate-700">
                <StatusBadge status={o.status} />
              </td>
            </tr>
          ))}

          {filtered.length === 0 && (
            <tr>
              <td colSpan={4} className="py-6 text-center text-slate-400">
                No customer match `{query}`
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
