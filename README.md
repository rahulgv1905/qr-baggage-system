# QR Baggage System

A modern web application for tracking baggage using QR codes, built with React and Node.js.

## Application Screenshots

![QR Code Generation and Scanning](./img1.png)
*QR Code Generation and Scanning Interface*

![Student Registration Form](./img2.png)
*Student Information Management System*

![Admin Dashboard Overview](./img3.png)
*Admin Dashboard with Real-time Updates*

## Features

- 🎯 QR Code Generation: Generate unique QR codes for baggage tracking
- 📱 QR Code Scanning: Scan QR codes using device camera
- 👥 Student Information Management: Track and manage student baggage details
- 🔐 Admin Dashboard: Secure admin interface for managing the system
- 📊 Real-time Updates: Track baggage status in real-time

## Application Overview

### Key Interfaces:

1. **Home Page**
   - Clean and intuitive landing page
   - Quick access to all main features
   - Modern responsive design

2. **QR Code Scanner**
   - Real-time QR code scanning
   - Camera integration
   - Instant baggage information retrieval

3. **Student Registration**
   - User-friendly form interface
   - Data validation
   - Secure information submission

4. **Admin Dashboard**
   - Comprehensive overview of all baggage
   - Real-time status updates
   - Advanced filtering and search capabilities

## Tech Stack

### Frontend
- React.js with Vite
- Tailwind CSS for styling
- QR Code generation and scanning capabilities
- Responsive design for all devices

### Backend
- Node.js
- Express.js
- MySQL Database
- RESTful API architecture

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MySQL

### Installation

1. Clone the repository
```bash
git clone https://github.com/rahulgv1905/qr-baggage-system.git
cd qr-baggage-system
```

2. Install Frontend Dependencies
```bash
cd frontend
npm install
```

3. Install Backend Dependencies
```bash
cd ../backend
npm install
```

4. Set up environment variables
- Create `.env` file in backend directory
- Add necessary environment variables:
```env
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=qr_baggage_db
PORT=5000
```

5. Start the development servers

Frontend:
```bash
cd frontend
npm run dev
```

Backend:
```bash
cd backend
npm start
```

## Features in Detail

### QR Code Generation
- Generate unique QR codes for each baggage
- Download QR codes in SVG format
- Print QR codes directly from the application

### Student Management
- Register student information
- Link baggage to student profiles
- Track baggage status and history

### Admin Dashboard
- View all registered baggage
- Track baggage status
- Manage student information
- Generate reports

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Rahul Vangaveti - vangavetirahul@gmail.com

Project Link: [https://github.com/rahulgv1905/qr-baggage-system](https://github.com/rahulgv1905/qr-baggage-system)
