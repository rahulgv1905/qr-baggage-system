import React, { useState, useEffect, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { useNavigate } from 'react-router-dom';
import StudentForm from '../components/StudentForm';

export default function StudentPage() {
  const [scanResult, setScanResult] = useState(null);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const qrRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const html5QrCode = new Html5Qrcode("qr-reader");
    qrRef.current = html5QrCode;

    const startScanner = async () => {
      try {
        const cameras = await Html5Qrcode.getCameras();
        if (cameras && cameras.length) {
          const camera = cameras[0];
          await html5QrCode.start(
            camera.id,
            {
              fps: 10,
              qrbox: { width: 250, height: 250 },
              aspectRatio: 1.0,
            },
            (decodedText) => {
              try {
                const data = JSON.parse(decodedText);
                setScanResult(data);
                setShowForm(true);
                stopScanner();
              } catch (err) {
                setError("Invalid QR code format");
                console.error("QR code parsing error:", err);
              }
            },
            (errorMessage) => {
              // Ignore permission denied errors
              if (!errorMessage.includes("Permission denied")) {
                console.warn("QR scan error:", errorMessage);
              }
            }
          );
          setIsScanning(true);
        } else {
          setError("No cameras found on your device");
        }
      } catch (err) {
        console.error("Scanner error:", err);
        setError("Failed to start scanner. Please check camera permissions.");
      }
    };

    startScanner();

    return () => {
      stopScanner();
    };
  }, []);

  const stopScanner = async () => {
    if (qrRef.current && isScanning) {
      try {
        await qrRef.current.stop();
        setIsScanning(false);
      } catch (err) {
        console.error("Error stopping scanner:", err);
      }
    }
  };

  const handleReset = async () => {
    setShowForm(false);
    setScanResult(null);
    setError(null);
    await stopScanner();
    const html5QrCode = qrRef.current;
    if (html5QrCode) {
      const cameras = await Html5Qrcode.getCameras();
      if (cameras && cameras.length) {
        const camera = cameras[0];
        await html5QrCode.start(
          camera.id,
          {
            fps: 10,
            qrbox: { width: 250, height: 250 },
            aspectRatio: 1.0,
          },
          (decodedText) => {
            try {
              const data = JSON.parse(decodedText);
              setScanResult(data);
              setShowForm(true);
              stopScanner();
            } catch (err) {
              setError("Invalid QR code format");
              console.error("QR code parsing error:", err);
            }
          },
          (errorMessage) => {
            if (!errorMessage.includes("Permission denied")) {
              console.warn("QR scan error:", errorMessage);
            }
          }
        );
        setIsScanning(true);
      }
    }
  };

  if (showForm && scanResult) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Student Information
            </h1>
            <StudentForm 
              containerId={scanResult.containerId} 
              onReset={handleReset}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Scan Your Baggage QR Code
          </h1>
          
          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}
          
          <div className="mb-6">
            <div 
              id="qr-reader" 
              className="w-full min-h-[300px] bg-gray-100 rounded-lg overflow-hidden"
            />
          </div>
          
          {scanResult && (
            <div className="mt-4 p-4 bg-green-50 rounded-md">
              <p className="text-green-700 text-sm">
                QR Code scanned successfully! Loading form...
              </p>
            </div>
          )}
          
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Position your baggage QR code within the frame to scan</p>
          </div>
        </div>
      </div>
    </div>
  );
}