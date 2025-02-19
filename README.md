# Voting Jokes Backend

This is the backend part of the **Voting Jokes** project, a fun web application where users can vote on daily jokes using emoji reactions. The backend is built using **Node.js** with **Express** and **MongoDB** for data storage. It provides a RESTful API for the frontend to fetch jokes, submit votes, and manage joke data.

---

## Features

- **Fetch Random Joke**: Fetch a random joke from the database.
- **Fetch All Jokes**: Retrieve all jokes stored in the database.
- **Fetch Joke by ID**: Retrieve a specific joke by its ID.
- **Create Joke**: Add a new joke to the database.
- **Update Joke**: Update the content of an existing joke.
- **Vote on Joke**: Submit a vote for a joke using emoji reactions.
- **Unvote Joke**: Remove a vote from a joke.
- **Delete Joke**: Delete a joke from the database.

---

## Technologies Used

- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express**: A web framework for Node.js to build RESTful APIs.
- **MongoDB**: A NoSQL database for storing jokes and vote data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.
- **Dotenv**: For managing environment variables.

---


## API Endpoints

The backend provides the following RESTful API endpoints:

### Jokes Routes

- **GET `/api/jokes`**: Fetch a random joke.
- **GET `/api/jokes/all`**: Fetch all jokes.
- **GET `/api/jokes/:id`**: Fetch a joke by its ID.
- **POST `/api/jokes/create`**: Create a new joke.
- **POST `/api/jokes/vote/:id`**: Submit a vote for a joke.
- **POST `/api/jokes/unvote/:id`**: Remove a vote from a joke.
- **PUT `/api/jokes/:id`**: Update a joke.
- **DELETE `/api/jokes/:id`**: Delete a joke.

---

## Environment Variables

The backend uses the following environment variables:

```env
PORT=3000
MONGO_URI=mongodb+srv://your_mongo_db_connection_string
```

Make sure to add these variables to your .env file before running the app.

---

## Getting Started

## Prerequisites
- **Node.js**: Make sure you have Node.js installed on your machine.
- **npm**: npm is bundled with Node.js, so you don't need to install it separately.
- **MongoDB**: Ensure you have a MongoDB database set up (local or cloud).

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/voting-jokes-backend.git
cd voting-jokes-backend
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
Create a .env file in the root directory and add the following:

```env
PORT=3000
MONGO_URI=mongodb+srv://your_mongo_db_connection_string
```

4. Run the server:

```bash
npm start
```

5. Access the API:
```bash
The API will be running on http://localhost:3000.
```

---

## Acknowledgments
- **Express**: For providing a simple and flexible web framework.
- **MongoDB**: For offering a scalable NoSQL database solution.
- **Mongoose**: For simplifying MongoDB interactions.

---

Happy Coding! 🚀
