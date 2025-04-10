const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const studentRoutes = require('./routes/studentRoutes');
const db = require('./config/db');

dotenv.config();
console.log('Environment loaded');

const app = express();
const PORT = process.env.PORT || 5000;

console.log(`Server will start on port ${PORT}`);

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  console.log('Root route accessed');
  res.json({ message: '✅ Backend API is running!' });
});

// Mount student routes
app.use('/api', studentRoutes);

// Handle 404 errors for undefined routes
app.use((req, res) => {
  console.log(`404 error for ${req.method} ${req.url}`);
  res.status(404).json({ 
    error: `Cannot ${req.method} ${req.url}`,
    availableRoutes: {
      root: '/',
      students: '/api/students',
      studentById: '/api/students/:id'
    }
  });
});

// Global error handling
app.use((err, req, res, next) => {
  console.error('Server error:', err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log('Server starting...');
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log('Available routes:');
  console.log('  - GET  /');
  console.log('  - GET  /api');
  console.log('  - GET  /api/students');
  console.log('  - POST /api/students');
  console.log('  - GET  /api/students/:id');
});
