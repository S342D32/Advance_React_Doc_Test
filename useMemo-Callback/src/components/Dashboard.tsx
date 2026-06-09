import { Link } from "react-router-dom";

const pages = [
  { to: "/memo", label: "useMemo", desc: "See how useMemo prevents expensive recalculations on re-renders." },
  { to: "/ref", label: "useRef", desc: "See how useRef persists values without triggering re-renders." },
];

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
      <p className="text-gray-500 mb-6">Pick a feature to explore:</p>
      <div className="grid grid-cols-2 gap-4">
        {pages.map(({ to, label, desc }) => (
          <Link
            key={to}
            to={to}
            className="block p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-amber-400 transition-all"
          >
            <h2 className="text-lg font-semibold mb-1">{label}</h2>
            <p className="text-sm text-gray-500">{desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
