import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Sample from "./components/Sample";
import Welcome from "./features/auth/Login";
import RequireAuth from "./features/auth/RequireAuth";
import Login from "./features/auth/Login"
import UserList from "./features/users/UserList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={Layout}>
          {/* Public routes */}
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />

          {/* Protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="dashboard" element={<h1>Dashboard</h1>} />
            <Route path="sample" element={<Sample/>} />
            
            <Route path="users" element={<UserList/>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
