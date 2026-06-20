import React from "react";
import { chartData } from "../data/data";

const RevenueChart = () => {
  const max = Math.max(...chartData.map((data) => data.value));
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5">
      <h3 className="text-sm font-semibold text-slate-900">
        Revenue (last 6 months)
      </h3>
      <div className="mt-6 flex items-end justify-between gap-3 h-40">
        {/* {chartData.map((data) => (
          <div
            key={data.month}
            className="flex flex-1 flex-col items-center gap-2 h-full"
          >
            <div
              className="w-full rounded-t-md bg-indigo-500"
              style={{ height: `${(data.value / max) * 100}%` }}
            >
              <span className="text-xs text-slate-400">{data.month}</span>
            </div>
          </div>
        ))} */}
        {chartData.map((data) => {
          const height = (data.value / max) * 100;

          return (
            <div
              key={data.month}
              className="flex flex-1 flex-col items-center justify-end gap-2 h-full"
            >
              <div
                className="w-full rounded-t-md bg-indigo-500"
                style={{ height: `${height}%` }}
              />

              <span className="text-xs text-slate-400">{data.month}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RevenueChart;
