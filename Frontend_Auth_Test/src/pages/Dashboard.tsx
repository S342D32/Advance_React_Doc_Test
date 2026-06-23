import type { RootState } from "@/stores/store";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div>
          {/* Welcome Banner */}
          <div className="bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 mb-6">
            <h2 className="text-3xl font-bold">
              Welcome, {user?.name} 👋
            </h2>

            <p className="mt-2 text-blue-100">
              Here's what's happening today.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-gray-500">Projects</p>
              <h3 className="text-3xl font-bold mt-2">12</h3>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-gray-500">Tasks</p>
              <h3 className="text-3xl font-bold mt-2">48</h3>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-gray-500">Completed</p>
              <h3 className="text-3xl font-bold mt-2">36</h3>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-gray-500">Performance</p>
              <h3 className="text-3xl font-bold mt-2">92%</h3>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Activities */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Recent Activities
              </h3>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-medium">
                    New project created
                  </p>
                  <span className="text-sm text-gray-500">
                    2 hours ago
                  </span>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-medium">
                    Task completed successfully
                  </p>
                  <span className="text-sm text-gray-500">
                    5 hours ago
                  </span>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="font-medium">
                    Profile updated
                  </p>
                  <span className="text-sm text-gray-500">
                    Yesterday
                  </span>
                </div>
              </div>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-blue-500 text-white flex items-center justify-center text-3xl font-bold">
                  {user?.name?.charAt(0)?.toUpperCase()}
                </div>

                <h3 className="text-xl font-semibold mt-4">
                  {user?.name}
                </h3>

                <p className="text-gray-500">
                  {user?.email}
                </p>

                <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Dashboard;
