// src/service/api.js
import axios from 'axios';

// Set the base URL for all axios requests
const api = axios.create({
  baseURL: 'https://fiverrnew.cybersoft.edu.vn/api',
  headers: {
    tokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAxNCIsIkhldEhhblN0cmluZyI6IjIwLzA0LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0NTEwNzIwMDAwMCIsIm5iZiI6MTcyMDcxNzIwMCwiZXhwIjoxNzQ1MjU0ODAwfQ.ausAdd72XdIU4PeMk3pQrAFbrDseUSOVNZMlQ4VSy-E', // Actual token
    'Content-Type': 'application/json',
  },
});

export default api;
