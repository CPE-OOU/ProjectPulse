# Web Application with Customized Chatbot (ProjectPulse

This repository contains the code and resources for my final year project as a computer engineering student at Olabisi Onabanjo University

## Project Details
Project Title: Development of a web repository application with customized chatbot
Student Name: Alayki Temitope Omolayo
Matric Number: EES/19/20/0148
Student Name: Jehoiakim Vincent Emmanuel
Matric Number: EES/20/21/0213
University: Olabisi Onabanjo University


## Project Overview

This repository hosts a web application that integrates a Python-based customized chatbot to facilitate the upload and retrieval of project papers. The web application is designed to streamline project documentation management through an intuitive user interface and intelligent chatbot interaction.

### Tech Stack

**Frontend:**
- **React (JSX):** For building the user interface and handling client-side interactions.
- **Tailwind CSS:** For styling the application with a utility-first approach.

**Backend:**
- **Node.js:** For server-side JavaScript execution.
- **Express:** For building the RESTful API and handling HTTP requests.

**Python:**
- **Customized Chatbot:** For processing and retrieving project papers.

## Project Structure

**Frontend**
- `/src`: Contains the React application code.
- `/components`: React components used in the application.
- `/pages`: Page components defining different routes/views.
- `/public`: Static assets like images and fonts.
- `tailwind.config.js`: Tailwind CSS configuration file.
- `package.json`: Frontend dependencies and scripts.

**Backend**
- `/server`: Contains the Node.js and Express application code.
- `/routes`: API routes for handling client requests.
- `/controllers`: Business logic for handling requests.
- `/middlewares`: Middleware functions for authentication, validation, etc.
- `/config`: Configuration files for the backend application.
- `server.js`: Entry point for the Express server.
- `package.json`: Backend dependencies and scripts.

**Python Chatbot**
- `chatbot.py`: Contains the Python code for the customized chatbot and logic used by the chatbot.
- `app.py`: Chatbot server that provides route API to link to the web.
- `/dataset`: Collected information to run the chatbot.

## Setup Instructions

### Prerequisites

- **Node.js (v14.x or later)**
- **MongoDB Compass**
- **Python (v3.8 or later)**
- **pip (Python package installer)**
- **npm** or **yarn** (JavaScript package managers)

### Installing Dependencies

For Python:
```bash
pip install flask
pip install flask-cors
pip install pandas
```

For JavaScript:
```bash
npm install -g serve
npm install --save-dev tailwindcss postcss autoprefixer
npm install express
```

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd client
    ```

2. Start the frontend development server:
    ```bash
    npm run dev
    ```

3. The application will be accessible at `http://localhost:5173`.

### Backend Setup

1. Navigate to the backend directory:
    ```bash
    cd server
    ```

2. Start the Express server:
    ```bash
    npm start
    ```

3. The API will be accessible at `http://localhost:5000`.

### Python Chatbot Setup

1. Navigate to the chatbot directory:
    ```bash
    cd chatbot
    ```

2. Create a virtual environment (optional but recommended):
    ```bash
    python -m venv venv
    ```

3. Activate the virtual environment:
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. Run the chatbot server:
    ```bash
    python app.py
    ```

5. The chatbot server will be available at `http://127.0.0.1:5000`.

## Integration

The frontend React application communicates with the backend Express server via RESTful API endpoints. The backend interacts with the Python chatbot for processing and retrieving project papers.

### API Endpoints

- **Signup:** `/api/v1/auth/signup`
- **Login:** `/api/v1/auth/login`
- **Getting user:** `/api/v1/user/getUser`
- **Getting user with ID:** `/api/v1/user/userProfile/:userId`
- **Uploading profile picture:** `/api/v1/user/:userId/upload`
- **Get profile picture:** `/api/v1/user/:userId/getImage`
- **Uploading file:** `/api/v1/user/:userId/uploadDOC`
- **Getting document:** `/api/v1/user/getDOC`
- **Chatbot API:** `http://127.0.0.1:5000/chatbot`

## Contributing

Contributions are welcome! Please follow the guidelines provided in the `CONTRIBUTING.md` file (if available) for submitting issues and pull requests.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Feel free to adjust any details to better fit your project or organization’s needs!
