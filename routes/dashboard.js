// In your backend (e.g., routes/dashboard.js)
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(403).json({ message: "Access denied" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};

router.get("/dashboard", authenticateToken, (req, res) => {
  res.json({ message: "Welcome to the Dashboard", user: req.user });
});

module.exports = router;
