import React, { useState } from "react";
import axios from "../axios"; // Import Axios instance
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Make the registration request to the backend
      const response = await axios.post("/auth/register", { name, email, password });

      // Handle successful registration
      if (response.data && response.data.user) {
        // Optionally, save the user data or token if needed
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // Redirect to login page after successful registration
        navigate("/login");
      } else {
        // Handle case where response doesn't contain expected data
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      // Handle error from the backend or network
      setError("Error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        {error && <div className="text-red-500">{error}</div>}
        <div>
          <label className="block text-sm font-semibold">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

