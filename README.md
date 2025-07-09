# Project Overview

This project is a simple server application built with Node.js, Express, and Mongoose (MongoDB). It provides basic API endpoints for managing messages.

## Features

- **Message Management:**
  - Create new messages
  - Retrieve all messages
  - Delete messages by ID

## Setup

1.  **Install Dependencies:**
    ```bash
    cd server
    npm install
    ```

2.  **Run the Server:**
    ```bash
    node server.js
    ```

## API Endpoints

- `GET /` : Displays available API routes.
- `POST /api/messages` : Create a new message.
- `GET /api/messages` : Retrieve all messages.
- `DELETE /api/messages/:id` : Delete a message by ID.
