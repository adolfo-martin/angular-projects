# hardware-solutions

## Project Overview
This is a Node.js Express application that connects to a MySQL database named "hardware_solutions". The application listens on port 3306 and provides various endpoints to interact with the database.

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd hardware-solutions
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Configure the database:**
   Ensure that you have a MySQL database named "hardware_solutions" and that the user "hardware_solutions" with the password "Hola1234" has the necessary permissions.

4. **Run the application:**
   Start the server by running:
   ```bash
   node src/app.js
   ```

5. **Access the application:**
   The application will be running on `http://localhost:3306`.

## File Structure
```
hardware-solutions
├── src
│   ├── app.js
│   ├── config
│   │   └── database.js
│   ├── controllers
│   │   └── index.js
│   ├── models
│   │   └── index.js
│   ├── routes
│   │   └── index.js
│   └── services
│       └── index.js
├── package.json
└── README.md
```

## Dependencies
- express
- mysql

## Usage
This application provides various endpoints to interact with the "hardware_solutions" database. Please refer to the documentation in the controllers for specific routes and their functionalities.