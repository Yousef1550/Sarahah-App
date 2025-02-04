🚀 Sarahah App Backend

This project is the backend component of the Sarahah App, a platform that allows users to send and receive anonymous messages. The backend is built using Node.js and Express, with MongoDB as the database.

🌟 Features

🔐 User Authentication: Secure user registration and login functionalities using JWT (JSON Web Tokens) for session management.

🛡️ Password Hashing: User passwords are securely hashed using bcrypt to ensure data protection.

✅ Input Validation: All user inputs are validated using Joi to maintain data integrity and prevent malicious data entry.

🔑 Authorization: Protected routes are accessible only to authenticated users, ensuring secure access control.

💬 Anonymous Messaging: Users can send and receive messages without revealing their identity.

👤 Profile Management: Users can update their profile information, including username and password.

📥 Message Management: Users can view and delete received messages.

⚙️ Prerequisites

Before setting up the project, ensure your system has the following:

📦 Node.js: Install the latest stable version from the official website.

📥 npm (Node Package Manager): Typically bundled with Node.js. Verify its installation by running:

npm -v

🗃️ MongoDB: Set up a MongoDB database, either locally or through a cloud service like MongoDB Atlas.

🔐 Environment Variables: Configure the necessary environment variables, such as database connection strings and authentication secrets. It's advisable to store these in a .env file in your project's root directory.

🚀 Installation

Clone the repository:

git clone https://github.com/Yousef1550/Sarahah-App.git

Navigate to the backend directory:

cd Sarahah-App/backend

Install dependencies:

npm install

⚡ Configuration

Environment Variables: Create a .env file in the backend directory and add the following variables:

PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Replace your_mongodb_connection_string with your actual MongoDB URI and your_jwt_secret with a secure secret key for JWT.

🏃‍♂️ Running the Application

Start the server:

npm start

The server will run on the port specified in the .env file (default is 3000).

📡 API Endpoints

User Registration: POST /api/users/register

User Login: POST /api/users/login

Send Anonymous Message: POST /api/messages/send

Get Received Messages: GET /api/messages/received

Delete Message: DELETE /api/messages/:id

🤝 Contributing

We welcome contributions from the community. If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.