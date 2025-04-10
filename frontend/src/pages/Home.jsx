import React from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, UserCircle } from "lucide-react";

const Home = () => {
  const navigate = useNavigate(); // ✅ must be inside the component

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Library Baggage Management System
        </h1>
        <p className="text-gray-500">
          Secure your belongings with our modern QR code system
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Gatekeeper Login */}
        <div className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <ShieldCheck className="h-10 w-10 text-blue-500 bg-blue-100 p-2 rounded-full" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Gatekeeper Login</h3>
          <p className="text-gray-500 mb-4">
            Login as a gatekeeper to manage baggage containers
          </p>
          <button
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl"
            onClick={() => navigate("/admin")} // 🔁 route to admin
          >
            Login
          </button>
        </div>

        {/* Student Login */}
        <div className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <UserCircle className="h-10 w-10 text-blue-500 bg-blue-100 p-2 rounded-full" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Student Login</h3>
          <p className="text-gray-500 mb-4">
            Login with Google to store and retrieve your baggage
          </p>
          <button
            className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl"
            onClick={() => navigate("/student")} // 🔁 route to student
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
