const StatCard = ({ label, value, change, Icon, accent }) => {
  const up = change > 0;
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-900">{label}</span>
        {/* Keep the prop name aligned with the JSX usage so the icon renders when stats are enabled again. */}
        <span className={`rounded-lg p-2 ${accent}`}>
          <Icon size={18} />
        </span>
      </div>
      <div className="mt-3 text-2xl font-semibold text-slate-900">{value}</div>
      <div
        className={`mt-1 flex items-center gap-1 text-sm ${up ? "text-emerald-600" : "text-rose-600"}`}
      ></div>
    </div>
  );
};

export default StatCard;
