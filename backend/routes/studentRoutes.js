// backend/routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Test route at /api
router.get('/', (req, res) => {
  res.json({ message: 'Student API is working!' });
});

// Get all students at /api/students
router.get('/students', studentController.getAllStudents);

// Add a new student at /api/students
router.post('/students', studentController.addStudent);

// Get student by ID at /api/students/:id
router.get('/students/:id', studentController.getStudentById);

module.exports = router;
