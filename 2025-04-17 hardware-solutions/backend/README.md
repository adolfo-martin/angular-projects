# Hardware Solutions REST API

This is a REST API for the Hardware Solutions database built with Node.js, Express, and MySQL.

## Project Structure

```
hardware-solutions
├── src
│   ├── app.js
│   ├── controllers
│   │   └── index.js
│   ├── models
│   │   └── index.js
│   ├── routes
│   │   └── index.js
│   └── config
│       └── database.js
├── package.json
└── README.md
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure database connection:
Create a `.env` file in the root directory with the following variables:
```
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=hardware_solutions
PORT=3000
```

3. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### Contacts
- GET `/api/contacts` - Get all contacts
- GET `/api/contacts/:id` - Get contact by ID

### Countries
- GET `/api/countries` - Get all countries
- GET `/api/countries/:id` - Get country by ID

[... continue with all other endpoints ...]

## Error Handling

The API returns appropriate HTTP status codes:
- 200: Success
- 404: Record not found
- 500: Server error

## Database Connection

The API connects to a MariaDB/MySQL database. Ensure the database is running and accessible before starting the server.

## License

This project is licensed under the MIT License.