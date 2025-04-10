import React, { useState } from "react";
import StudentList from './StudentList';
import QRCodeGenerator from './QRCodeGenerator';
import { QrCode, Users, Download, RefreshCw } from 'lucide-react';

const AdminDashboard = () => {
  const [containerId, setContainerId] = useState("");
  const [generated, setGenerated] = useState(false);
  const [activeTab, setActiveTab] = useState("students"); // "students" or "qr"

  const handleGenerate = () => {
    if (containerId.trim() !== "") {
      setGenerated(true);
    }
  };

  const handleReset = () => {
    setContainerId("");
    setGenerated(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <div className="flex space-x-2">
            <button 
              onClick={() => setActiveTab("students")}
              className={`px-4 py-2 rounded-md flex items-center ${
                activeTab === "students" 
                  ? "bg-blue-600 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Users className="mr-2 h-5 w-5" />
              Students
            </button>
            <button 
              onClick={() => setActiveTab("qr")}
              className={`px-4 py-2 rounded-md flex items-center ${
                activeTab === "qr" 
                  ? "bg-blue-600 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <QrCode className="mr-2 h-5 w-5" />
              QR Generator
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content area - takes 2/3 of the space on large screens */}
          <div className="lg:col-span-2">
            {activeTab === "students" ? (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Student List</h2>
                <StudentList />
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Generate QR Code</h2>
                <div className="space-y-6">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="containerId" className="text-sm font-medium text-gray-700">
                      Container ID
                    </label>
                    <div className="flex space-x-2">
                      <input
                        id="containerId"
                        type="text"
                        placeholder="Enter Container ID"
                        value={containerId}
                        onChange={(e) => {
                          setContainerId(e.target.value);
                          setGenerated(false);
                        }}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        onClick={handleReset}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center"
                      >
                        <RefreshCw className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={handleGenerate}
                    disabled={!containerId.trim()}
                    className={`w-full py-3 px-4 rounded-md font-medium flex items-center justify-center ${
                      containerId.trim() 
                        ? "bg-blue-600 hover:bg-blue-700 text-white" 
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <QrCode className="mr-2 h-5 w-5" />
                    Generate QR Code
                  </button>

                  {generated && (
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium text-gray-800">Generated QR Code</h3>
                        <span className="text-sm text-gray-500">Container ID: {containerId}</span>
                      </div>
                      <div className="flex justify-center">
                        <QRCodeGenerator studentData={{
                          id: "container",
                          name: "Container",
                          regno: containerId,
                          containerId: containerId
                        }} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - takes 1/3 of the space on large screens */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Quick Stats</h2>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">Total Students</p>
                      <p className="text-2xl font-bold text-gray-800">24</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="p-2 bg-green-100 rounded-full">
                      <QrCode className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">Active Containers</p>
                      <p className="text-2xl font-bold text-gray-800">18</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="p-2 bg-purple-100 rounded-full">
                      <Download className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">QR Codes Generated</p>
                      <p className="text-2xl font-bold text-gray-800">42</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
