# To-Do List Application

## Overview
This project is a *To-Do List Application* using modern web development technologies. The app allows users to create, view, update, and delete tasks. The backend handles data storage and retrieval using a PostgreSQL database, while the frontend provides a responsive and styled interface using React and Tailwind CSS.

---
## Features
- **Add New Tasks**: Create tasks with a title and description.
- **View All Tasks**: Display all tasks fetched from the backend.
- **Update Task Status**: Mark tasks as completed or pending.
- **Delete Tasks**: Remove tasks from the list.
- **Responsive Design**: Styled using Tailwind CSS.

---
## Technologies Used

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.

### Backend
- **Django**: A Python web framework for the server-side API.
- **Django REST Framework (DRF)**: RESTful APIs for interaction between React and Django.
- **PostgreSQL**: A relational database for storing tasks.

---
## Setup Instructions

### Prerequisite
If you're using macOS with Homebrew, to configure your terminal correctly. Add the following line to your `.zshrc` file if it’s not already there:
```bash
export PATH="/opt/homebrew/bin:$PATH"
```

Reload the configuration by running:
```bash
source ~/.zshrc
```

### Backend (Django)
1. Navigate to the `backend` folder:
   ```bash
   cd /path/to/backend
   ```
2. Activate the virtual environment:
   ```bash
   source env/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run database migrations:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```
5. Start the Django server:
   ```bash
   python manage.py runserver
   ```

### Frontend (React)
1. Navigate to the `frontend` folder:
   ```bash
   cd /path/to/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

---
## API Endpoints
- `GET /api/tasks/`: Retrieve all tasks.
- `POST /api/tasks/`: Add a new task.
- `GET /api/tasks/<id>/`: Retrieve a specific task.
- `PUT /api/tasks/<id>/`: Update a task.
- `DELETE /api/tasks/<id>/`: Delete a task.

## License
This project is open source and available under the MIT License.
