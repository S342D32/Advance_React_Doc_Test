import { lazy, Suspense } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

const Dashboard = lazy(() => import("@/components/Dashboard"));
const MemoTest = lazy(() => import("@/components/MemoTest"));
const RefTest = lazy(() => import("@/components/RefTest"));
const SuspenseTest = lazy(() => import("@/components/SuspenseTest"));
import "./App.css";

const navItems = [
  { to: "/", label: "Dashboard" },
  { to: "/memo", label: "useMemo" },
  { to: "/ref", label: "useRef" },
  { to: "/suspense", label: "Suspense" },
];

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <aside className="w-48 bg-gray-900 text-white flex flex-col p-4 gap-2">
          <h1 className="text-lg font-bold mb-4">React Tests</h1>
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? "bg-amber-400 text-black" : "hover:bg-gray-700"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </aside>

        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          <Suspense fallback={
            <div className="flex items-center justify-center h-full text-gray-400">Loading...</div>
          }>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/memo" element={<MemoTest />} />
              <Route path="/ref" element={<RefTest />} />
              <Route path="/suspense" element={<SuspenseTest />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
