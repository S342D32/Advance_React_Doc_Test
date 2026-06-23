import type { RootState } from "@/stores/store";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { logout } from "@/stores/slices/authSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/stores/store";
import toast from "react-hot-toast";

const Layout = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg hidden md:flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-blue-600">My Dashboard</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button onClick={() => navigate("/dashboard")} className="w-full text-left px-4 py-3 rounded-xl bg-blue-50 text-blue-600 font-medium">
            Dashboard
          </button>
          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-100 transition">
            Profile
          </button>
          <button onClick={() => navigate("/task")} className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-100 transition">
            Tasks
          </button>
          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-100 transition">
            Settings
          </button>
        </nav>
        <div className="p-4 border-t">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-medium transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
            <p className="text-gray-500 text-sm">Welcome back, {user?.name}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
            {user?.name?.charAt(0)?.toUpperCase()}
          </div>
        </header>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
