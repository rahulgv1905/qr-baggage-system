// backend/controllers/studentController.js
const db = require('../config/db');

// Get all students
const getAllStudents = (req, res) => {
  console.log('Fetching all students...');
  db.query('SELECT * FROM students', (err, results) => {
    if (err) {
      console.error('Error fetching students:', err);
      return res.status(500).json({ error: 'Error fetching students' });
    }
    console.log('Students fetched:', results);
    res.json(results);
  });
};

// Add a new student
const addStudent = (req, res) => {
  console.log('Adding new student with data:', req.body);
  const { name, regno, email, phone } = req.body;
  
  // Validate required fields
  if (!name || !regno || !email || !phone) {
    console.error('Missing required fields');
    return res.status(400).json({ error: 'All fields are required' });
  }

  const deposit_time = new Date();

  const query = 'INSERT INTO students (name, regno, email, phone, deposit_time) VALUES (?, ?, ?, ?, ?)';
  const values = [name, regno, email, phone, deposit_time];
  
  console.log('Executing query:', query);
  console.log('With values:', values);

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error adding student:', err);
      return res.status(500).json({ error: 'Error adding student' });
    }
    console.log('Student added successfully:', result);
    res.status(201).json({ id: result.insertId, message: 'Student added successfully' });
  });
};

// Get student by ID
const getStudentById = (req, res) => {
  const id = req.params.id;
  console.log('Fetching student with ID:', id);
  
  db.query('SELECT * FROM students WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Error fetching student:', err);
      return res.status(500).json({ error: 'Error fetching student' });
    }
    if (results.length === 0) {
      console.log('No student found with ID:', id);
      return res.status(404).json({ error: 'Student not found' });
    }
    console.log('Student found:', results[0]);
    res.json(results[0]);
  });
};

module.exports = {
  getAllStudents,
  addStudent,
  getStudentById
};
