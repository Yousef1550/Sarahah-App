# Sarahah App Backend

This is the backend component of the **Sarahah App**, a platform that allows users to send and receive anonymous messages. The backend is developed using **Node.js**, **Express.js**, and **MongoDB** to ensure secure, fast, and scalable communication.

## 🚀 Features

- **User Authentication:** Secure registration and login using **JWT (JSON Web Tokens)**.
- **Authorization:** Role-based access control for protected routes.
- **Password Hashing:** Strong password encryption using **bcrypt**.
- **Input Validation:** Robust validation with **Joi** to ensure data integrity.
- **Anonymous Messaging:** Send and receive messages anonymously.
- **Profile Management:** Update profile details securely.
- **Message Management:** View and delete received messages.

## ⚙️ Technologies Used

- **Node.js & Express.js:** Backend framework for building the server.
- **MongoDB & Mongoose:** NoSQL database for data storage.
- **JWT:** Secure token-based authentication.
- **bcrypt:** Password hashing for enhanced security.
- **Joi:** Schema-based input validation.

## 📋 Prerequisites

Ensure the following are installed on your machine:

- **Node.js** (Download from [here](https://nodejs.org/))
- **npm (Node Package Manager)** (comes with Node.js)
- **MongoDB** (locally or via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

Verify installations:

```bash
node -v
npm -v
```


## 🔐 Configuration

1. **Create a `.env` File:**

   ```bash
   touch .env
   ```

2. **Add Environment Variables:**

   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

Replace `your_mongodb_connection_string` and `your_jwt_secret` with your actual credentials.

## 🏃 Running the Application

To start the server:

```bash
npm start
```

The server will run on `http://localhost:3000` (or the port specified in `.env`).


