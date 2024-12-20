import React, { useState } from "react";
import axios from "../axios"; // Import Axios instance
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/auth/login", { email, password });
      const { token } = response.data;

      // Save token to localStorage or cookies
      localStorage.setItem("token", token);

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        {error && <div className="text-red-500">{error}</div>}
        <div>
          <label className="block text-sm font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded mt-4"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
