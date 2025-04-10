import React, { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner } from "html5-qrcode";

const QRScanner = ({ onScanSuccess }) => {
  const scannerRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("qr-reader", {
      fps: 10,
      qrbox: 250
    });

    scanner.render(
      (decodedText) => {
        setError(null);
        onScanSuccess(decodedText);
        scanner.clear(); // Stop scanning after success
      },
      (error) => {
        console.error("QR scan error:", error);
        setError("Failed to scan QR code. Please try again.");
      }
    );

    return () => {
      scanner.clear().catch(err => console.error("Scanner cleanup error", err));
    };
  }, [onScanSuccess]);

  return (
    <div>
      <div id="qr-reader" ref={scannerRef}></div>
      {error && (
        <div className="mt-2 text-red-600 text-sm">
          {error}
        </div>
      )}
    </div>
  );
};

export default QRScanner;
