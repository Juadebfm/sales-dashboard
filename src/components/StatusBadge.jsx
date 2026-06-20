import React from "react";

const StatusBadge = ({ status }) => {
  const tolower = status.toLowerCase();

  const colors = {
    paid: "bg-emerald-50 text-emerald-700",
    pending: "bg-amber-50 text-amber-700",
    failed: "bg-rose-50 text-rose-700",
  };

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-medium ${colors[tolower]}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
