
# Sparks of Connection - Dance Academy Backend

This project is a backend server for the **Sparks of Connection** dance academy, specializing in social partner dances like cumbia, bachata, and salsa. The backend is built with Node.js, Express, TypeScript, and MongoDB to manage users, classes, and registrations.

## Table of Contents

- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [Routes and Endpoints](#routes-and-endpoints)
- [Database Models](#database-models)

---

### Technologies

- **Node.js**: JavaScript runtime for server-side code.
- **Express**: Web framework for handling HTTP requests and routing.
- **TypeScript**: Type-safe JavaScript for better code readability and maintainability.
- **MongoDB**: NoSQL database for storing users, classes, and other data.
- **Mongoose**: ODM for MongoDB, providing schema-based data modeling.

### Project Structure

```
src/
├── config/              # Configuration files (database)
│   └── database.ts      # Database connection setup
├── controllers/         # Controllers for handling request logic
│   └── classController.ts  # Controller for dance class operations
├── models/              # Mongoose data models
│   └── Class.ts         # Dance class schema and model
├── routes/              # Route definitions for different endpoints
│   ├── classes.ts       # Routes for class-related operations
│   └── users.ts         # Routes for user-related operations
├── index.ts             # Main entry point for the Express server
└── types/               # TypeScript custom types
.env                     # Environment variables (not committed to version control)
```

### Setup

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd sparks-backend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the following variables (example values below):
     ```plaintext
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     ```

4. **Run the Server**:
   - For development:
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm run build
     npm start
     ```

### Scripts

- **`dev`**: Runs the development server with hot-reloading.
- **`build`**: Compiles TypeScript files into JavaScript.
- **`start`**: Starts the production server.

### Environment Variables

- **`PORT`**: Specifies the server port (defaults to 5000 if not set).
- **`MONGO_URI`**: MongoDB connection string for database access.

### Routes and Endpoints

The backend has endpoints for managing users and classes:

1. **Root Endpoint**:
   - **`GET /`**: Returns a welcome message from the API.

2. **Classes Routes** (`/api/classes`):
   - **`GET /`**: Fetches a list of available dance classes.
   - **`POST /`**: Creates a new dance class (requires JSON payload with `name`, `description`, and `schedule`).

3. **Users Routes** (`/api/users`):
   - **`GET /`**: Fetches a list of registered users.
   - **`POST /`**: Creates a new user (requires JSON payload with user details).

### Database Models

1. **Class Model**:
   - **Schema**:
     - `name`: `string` - Required
     - `description`: `string` - Required
     - `schedule`: `Date` - Required
   - **File**: `src/models/Class.ts`

2. **Future Models**:
   - You can add models such as `User` or `Registration` to extend functionality as needed.

### Example Requests

1. **Get All Classes**:
   ```http
   GET /api/classes
   ```

2. **Create a New Class**:
   ```http
   POST /api/classes
   Content-Type: application/json
   Body:
   {
     "name": "Salsa Basics",
     "description": "Beginner-friendly salsa dance class",
     "schedule": "2024-11-01T18:00:00Z"
   }
   ```

### Future Improvements

- **Authentication**: Add user authentication and authorization for secure endpoints.
- **Class Registration**: Implement a feature for users to register for specific classes.
- **User Profiles**: Allow users to create and manage their profiles, including saved classes.
- **Advanced Error Handling**: Improve error handling with custom error classes and detailed error responses.
