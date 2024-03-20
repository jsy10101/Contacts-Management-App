# Contacts Management App 📇🔧

## Overview 🚀

This project is a simple contacts management application built with Flask (Python) for the backend and Vite (React TypeScript) for the frontend. It allows users to perform CRUD (Create, Read, Update, Delete) operations on contacts.

## Backend (Flask) 🧰

### Setup 🔧

1. Install dependencies:

   ```bash
   pip3 install Flask Flask-SQLAlchemy flask-cors
   ```

2. Run the backend server:
   ```bash
   python3 main.py
   ```

### Files

- `config.py`: Configuration settings for Flask app, including database URI and CORS.
- `models.py`: Defines database models using SQLAlchemy ORM, such as the `Contact` model.

### Database 🗃️

- **ORM:** Utilizes SQLAlchemy as the Object-Relational Mapping (ORM) tool.
- **Model Definition:** `Contact` model with fields `id`, `first name`, `last name`, and `email`.

### Endpoints 🛣️

- **Create:** `POST /create_contact` - Create a new contact.
- **Read:** `GET /contacts` - Retrieve all contacts.
- **Update:** `PATCH /update_contact/<int:user_id>` - Update an existing contact.
- **Delete:** `DELETE /delete_contact/<int:user_id>` - Delete a contact.

## Frontend (React) 🖥️

### Setup 🔧

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the frontend:
   ```bash
   npm run dev
   ```

### Technologies Used 🛠️

- **Vite:** Fast build tool for modern web development.
- **React with TypeScript:** Frontend built using React with TypeScript for type safety.

## Usage 📝

1. Start the backend server with `python3 main.py`.
2. Start the frontend development server with `npm run dev`.
3. Access the application in your browser at `http://localhost:5173`.

---
