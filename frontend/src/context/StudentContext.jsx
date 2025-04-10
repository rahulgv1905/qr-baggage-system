import React, { createContext, useContext, useState } from 'react';

const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [studentData, setStudentData] = useState(null);

  return (
    <StudentContext.Provider value={{ studentData, setStudentData }}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudent() {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudent must be used within a StudentProvider');
  }
  return context;
} 