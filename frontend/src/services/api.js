// frontend/src/services/api.js
const API_URL = 'http://localhost:5000/api';

export const studentApi = {
  // Get all students
  getAllStudents: async () => {
    try {
      const response = await fetch(`${API_URL}/students`);
      if (!response.ok) throw new Error('Failed to fetch students');
      return await response.json();
    } catch (error) {
      console.error('Error fetching students:', error);
      throw error;
    }
  },

  // Add a new student
  addStudent: async (studentData) => {
    try {
      const response = await fetch(`${API_URL}/students`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      });
      if (!response.ok) throw new Error('Failed to add student');
      return await response.json();
    } catch (error) {
      console.error('Error adding student:', error);
      throw error;
    }
  },

  // Get student by ID
  getStudentById: async (id) => {
    try {
      const response = await fetch(`${API_URL}/students/${id}`);
      if (!response.ok) throw new Error('Failed to fetch student');
      return await response.json();
    } catch (error) {
      console.error('Error fetching student:', error);
      throw error;
    }
  }
}; 