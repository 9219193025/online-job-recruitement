import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="space-y-4">
        <Link
          to="/post-job"
          className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Post a Job
        </Link>
        {/* Add more links for features */}
      </div>
    </div>
  );
};

export default Dashboard;

