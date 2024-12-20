import React, { useState } from "react";

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    company: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Job posted successfully!");
        setFormData({ title: "", description: "", company: "", location: "" });
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error posting job:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Post a Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Job Title"
          className="w-full border rounded px-3 py-2"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Job Description"
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company Name"
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full border rounded px-3 py-2"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJob;
