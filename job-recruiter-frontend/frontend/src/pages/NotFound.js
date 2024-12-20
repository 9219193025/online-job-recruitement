import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
