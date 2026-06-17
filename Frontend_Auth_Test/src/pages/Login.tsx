import { loginUser } from "@/stores/slices/authSlice";
import type { AppDispatch, RootState } from "@/stores/store";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const [form, setForm] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser(form))
      .unwrap()
      .then(() => {
        toast.success("Login successful!");
        navigate("/dashboard");
      })
      .catch((err) => toast.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" />
      <input value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Password" type="password" />
      {error && <p>{error}</p>}
      <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
    </form>
  );
};

export default Login;
