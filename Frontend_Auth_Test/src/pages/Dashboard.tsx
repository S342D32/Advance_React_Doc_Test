import { logout } from "@/stores/slices/authSlice";
import type { AppDispatch, RootState } from "@/stores/store";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out!");
    navigate("/");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{user?.name}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
