import { QRCodeSVG } from 'qrcode.react';
import { Download, Copy, Check } from 'lucide-react';
import { useState, useRef } from 'react';

export default function QRCodeGenerator({ studentData }) {
  const [copied, setCopied] = useState(false);
  const qrRef = useRef(null);
  
  const qrData = JSON.stringify({
    id: studentData.id,
    name: studentData.name,
    regno: studentData.regno,
    containerId: studentData.containerId
  });

  const handleDownload = () => {
    if (qrRef.current) {
      const svgElement = qrRef.current;
      const svgData = new XMLSerializer().serializeToString(svgElement);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl = URL.createObjectURL(svgBlob);
      
      const downloadLink = document.createElement('a');
      downloadLink.href = svgUrl;
      downloadLink.download = `baggage-qr-${studentData.regno}.svg`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(svgUrl);
    }
  };

  const handleCopyData = () => {
    navigator.clipboard.writeText(qrData);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <QRCodeSVG
          ref={qrRef}
          value={qrData}
          size={256}
          level="H"
          includeMargin={true}
          className="rounded-lg"
        />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <button
          onClick={handleDownload}
          className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center justify-center"
        >
          <Download className="mr-2 h-4 w-4" />
          Download QR Code
        </button>
        
        <button
          onClick={handleCopyData}
          className="flex-1 py-2 px-4 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center justify-center"
        >
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4 text-green-500" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              Copy Data
            </>
          )}
        </button>
      </div>
      
      <div className="w-full bg-gray-50 p-3 rounded-md text-xs text-gray-500 font-mono overflow-x-auto">
        <div className="whitespace-nowrap">
          ID: {studentData.id} | Name: {studentData.name} | Reg: {studentData.regno} | Container: {studentData.containerId}
        </div>
      </div>
    </div>
  );
} 