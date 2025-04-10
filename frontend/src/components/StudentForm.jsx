import { useState } from 'react';
import { studentApi } from '../services/api';
import QRCodeGenerator from './QRCodeGenerator';

export default function StudentForm({ containerId }) {
  const [formData, setFormData] = useState({
    name: '',
    regno: '',
    email: '',
    phone: '',
    containerId: containerId || ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [registeredData, setRegisteredData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setRegisteredData(null);

    try {
      const dataToSubmit = {
        ...formData,
        containerId: containerId || formData.containerId
      };
      
      const result = await studentApi.addStudent(dataToSubmit);
      setRegisteredData({ ...dataToSubmit, id: result.id });
      setFormData({
        name: '',
        regno: '',
        email: '',
        phone: '',
        containerId: containerId || ''
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (registeredData) {
    return (
      <div className="space-y-6">
        <div className="p-4 bg-green-100 text-green-700 rounded">
          Registration successful! Please save your QR code.
        </div>
        <QRCodeGenerator studentData={registeredData} />
        <button
          onClick={() => setRegisteredData(null)}
          className="w-full py-2 px-4 bg-gray-100 text-gray-600 rounded hover:bg-gray-200"
        >
          Register Another Student
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Registration Number</label>
          <input
            type="text"
            name="regno"
            value={formData.regno}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Registering...' : 'Register Baggage'}
        </button>
      </form>
    </div>
  );
} 