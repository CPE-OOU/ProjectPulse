SETUP DOCUMENTATION FOR WEB REPOSITORY
Project Overview	
This repository contains a web application that leverages a Python-based customized chatbot for facilitating the upload and retrieval of project papers. The web application is built with a tech stack that includes React (JSX), Tailwind CSS, Node.js, Express, and Python. The system is designed to streamline the management of project documentation through an intuitive interface and intelligent chatbot interaction.
TECH STACK
Frontend:
•	React (JSX): For building the user interface and handling client-side interactions.
•	Tailwind CSS: For styling the application with a utility-first approach.
Backend:
•	Node.js: For server-side JavaScript execution.
•	Express: For building the RESTful API and handling HTTP requests.
Python:
•	Customized Chatbot: For processing and retrieving project papers.
PROJECT STRUCTURE
Frontend
•	`/src`: Contains the React application code.
•	`/components`: React components used in the application.
•	/pages`: Page components defining different routes/views.
•	`/public`: Static assets like images and fonts.
•	`tailwind.config.js`: Tailwind CSS configuration file.
•	`package.json`: Frontend dependencies and scripts.
Backend

•	`/server`: Contains the Node.js and Express application code.
•	`/routes`: API routes for handling client requests.
•	`/controllers`: Business logic for handling requests.
•	`/middlewares`: Middleware functions for authentication, validation, etc.
•	`/config`: Configuration files for the backend application.
•	`server.js`: Entry point for the Express server.
•	`package.json`: Backend dependencies and scripts.
Python Chatbot
•	`chatbot.py`: Contains the Python code for the customized chatbot and logic used by the chatbot.
•	`app.py`: chatbot sever that provides route API to link to web.
•	`dataset`:  Collected information to run chatbot 

SETUP INSTRUCTIONS
1.	Prerequisites
•	Node.js (v14.x or later)
•	MongoDB compass
•	Python (v3.8 or later)
•	pip (Python package installer)
•	npm or yarn (JavaScript package managers) 

2.	Installing dependencies
•	Pip install flask
•	Pip install flask-cors
•	Pip install pandas
•	Npm install g- serve
•	Npm install –D tailwindcss postcss autoprefixer
•	Npm install express

3.	Frontend Setup 
•	Navigate to the frontend directory: cd client
•	Start the front-end development server: npm run dev
•	The application will be accessible at `http://localhost:5173`.

4.	Backend Setup
•	Navigate to the backend directory: cd server
•	Start the Express server: npm start
•	The API will be accessible at `http://localhost:5000`.

5.	Python Chatbot Setup
•	Navigate to the chatbot directory: cd chatbot
•	Create a virtual environment (optional but recommended): python -m venv venv
•	Activate the virtual environment On Windows: venv\Scripts\activate.
•	Run the chatbot server (if applicable): python app.py
•	The chatbot server will be available.

 INTEGRATION
The frontend React application communicates with the backend Express server via RESTful API endpoints. The backend interacts with the Python chatbot for processing and retrieving project papers.
1.	API Endpoints
•	Signup: /api/vi/auth/Signup.
•	Login: /api/vi/auth/login.
•	Getting user: /api/vi/user/getUser.
•	Getting user with ID: /api/vi/user/userProfile/:user Id.
•	Uploading profile picture: /api/vi/user/:user Id/uploading.
•	Get  profile picture: /api/vi/user/:userId/getImage
•	Uploading file: /api/vi/user/:user Id/ upload DOC.
•	Getting document: /api/vi/user/getDOC.
•	Chatbot api: http://127.0.0.1:5000/chatbot.

