// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Backend URL (change if necessary)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
