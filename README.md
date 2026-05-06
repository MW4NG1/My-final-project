# Smart Study Planner

## Project Overview
Smart Study Planner is a simple web application that helps students organize and manage their study tasks. Users can add tasks, track deadlines, mark tasks as completed, and monitor their overall progress.

## Problem Statement
Students often struggle to keep track of their study tasks, deadlines, and progress, which can lead to poor time management and missed work.

## Solution
This project provides a simple and interactive task management system where users can:
- Add study tasks
- Set deadlines and priorities
- Mark tasks as completed
- View all tasks in one place
- Track their progress visually using a progress bar

## Project Structure
The project consists of three main HTML pages:
- index.html → Home page/Dashboard
- add-task.html → Page for adding new tasks
- tasks.html → Page for viewing and managing tasks
  Other files:
- style.css → Handles all styling and layout
- script.js → Handles functionality and logic

## Technologies Used
1. HTML for Structure
2. CSS for Styling & Responsive Design
3. JavaScript for DOM Manipulation & Logic

## How It Works
- User adds a task using the form
- The task is stored in LocalStorage
- Tasks are retrieved and displayed dynamically
- Users can update task status or delete tasks
- The homepage calculates and displays progress

## Responsiveness
The application uses media queries to adjust layout for smaller screens, ensuring usability on mobile, tablet, and desktop devices.

## Known Issues
- Tasks are not sorted by date or priority
- No user authentication (single-user system)
- Data is stored locally and not synced online

## Future Improvements
- Add task sorting (by date or priority)
- Add search functionality
- Improve UI with animations and transitions
- Add user accounts and database storage

## Author
Developed by Mwangi Michael for the Final Project.

## How to Run the Project
1. Download or clone the repository
2. Open the project folder in VS Code
3. Right-click index.html
4. sOpen with Live Server

## Conclusion
This project demonstrates the use of HTML, CSS, and JavaScript to build an interactive and user-friendly web application with persistent data storage.
