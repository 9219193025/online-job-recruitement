import React from "react";

const JobList = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
        <ul>
          <li>Job 1: Software Engineer</li>
          <li>Job 2: Data Scientist</li>
          <li>Job 3: Web Developer</li>
        </ul>
      </div>
    </div>
  );
};

export default JobList;
