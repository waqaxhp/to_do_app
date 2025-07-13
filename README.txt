ToDo App By Muhammad Waqas


A simple, fast, and responsive To-Do list app built with React + Tailwind CSS + Material UI. It allows users to manage tasks with ease, supporting essential features like task creation, completion toggling, and deletion.


**Live Demo**: [https://test-todoapp.vercel.app/](https://test-todoapp.vercel.app/)

## Setup Instructions

1. **Clone the repository:**


git clone https://github.com/waqaxhp/to_do_app.git

cd todo-app

Install dependencies:


npm install

Start the development server:

npm run dev

Open in browser:
Go to http://localhost:5173 (or the port displayed in the terminal).

How to Use
Add a task: Type in the input field and press Enter or click the "Add" button.

Mark as complete: Click on a task to toggle its completed status.

Delete a task: Click the trash icon next to a task to remove it.

Bonus Features Implemented

 Task filtering (All / Active / Completed)

 Local storage support to persist tasks

 Responsive and mobile-friendly layout

 Clear all completed tasks button

 Keyboard accessibility (Enter to add, arrow keys to navigate)

 Dark mode toggle (if implemented)

Decisions & Trade-offs
Minimal external dependencies: Chose to use only essential libraries to keep the app lightweight and maintainable.

LocalStorage over backend: For simplicity and fast prototyping, tasks are stored in LocalStorage instead of a backend API.

No authentication: Skipped user authentication to focus on core task management functionality.

Styling: Used Tailwind CSS for rapid UI development and consistent styling.