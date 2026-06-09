import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../../features/auth/authSlice";
import { useLoginMutation } from "./authApiSlice";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  // Focus on username input
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // Clear error when typing
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { accessToken } = await login({ user, pwd }).unwrap();

      // Save token + user in redux
      dispatch(setCredentials({ accessToken, user }));

      // Clear fields
      setUser("");
      setPwd("");

      navigate("/welcome");
    } catch (err) {
      if (!err?.originalStatus) {
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }

      errRef.current.focus();
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h1 className="text-xl font-bold mb-4 text-center">Login</h1>

        {/* Error Message */}
        <p
          ref={errRef}
          className={`text-red-500 text-sm mb-2 ${
            errMsg ? "block" : "hidden"
          }`}
        >
          {errMsg}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          
          {/* Username */}
          <input
            ref={userRef}
            type="text"
            placeholder="Username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="border p-2 rounded"
            autoComplete="off"
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            className="border p-2 rounded"
            required
          />

          {/* Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>
    </section>
  );
};

export default Login;