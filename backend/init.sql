USE qr_baggage_system;

CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    regno VARCHAR(20),
    email VARCHAR(100),
    phone VARCHAR(15),
    deposit_time DATETIME
);