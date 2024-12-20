const Job = require('../models/Job');

// Create a job
const createJob = async (req, res) => {
  try {
    const job = await Job.create({ ...req.body, user: req.user._id });
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate('user', 'name email');
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createJob, getJobs };
