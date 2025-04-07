# Student Administration App

A React-based application for managing student records, built with Vite and featuring React Router for navigation.

![App Preview](src/assets/img/escuela.svg)

## Features

- 🎓 View, add, edit, and delete student records
- 🔍 Detailed student view with print functionality
- 📱 Responsive design for all screen sizes
- 🚀 Fast development with Vite and React 19
- ✅ Form validation and error handling

## Technologies Used

- React 19
- Vite
- React Router DOM
- SweetAlert2 for notifications
- ESLint for code quality
- SWC for fast refresh

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/student-admin.git
```

2. Navigate to the project directory:

```bash
cd student-admin
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

## Available Scripts

- npm run dev: Starts the development server

- npm run build: Builds the app for production

- npm run lint: Runs ESLint to check code quality

- npm run preview: Previews the production build

## Project Structure

```
src/
├── assets/
│   └── img/              # Application images
├── components/           # React components
│   ├── EditStudent.jsx   # Student editing form
│   ├── Head.jsx          # Header component
│   ├── ListStudents.jsx  # Student list table
│   ├── MainStudents.jsx  # Main layout
│   ├── NewStudent.jsx    # New student form
│   └── VistaStudent.jsx  # Student detail view
├── hook/
│   └── useStudentList.jsx # Custom hook for student management
├── mock/
│   └── dataAlumnos.js    # Mock student data
├── utils/
│   └── funciones.js      # Utility functions
├── App.css               # Main styles
├── App.jsx               # Main application component
├── index.css             # Global styles
└── main.jsx              # Application entry point
```

## Component Overview

- MainStudents: The main layout that combines the header, new student form, and student list

- NewStudent: Form for adding new students

- ListStudents: Table displaying all students with action buttons

- EditStudent: Form for editing existing student records

- VistaStudent: Detailed view of a single student record

- Head: Application header with title and logo

## Custom Hook

- The useStudentList hook provides the following functionality:

- students: Array of current students

- addStudent: Add a new student

- removeStudent: Delete a student by ID

- editStudent: Update an existing student

## Data Structure

Student records contain:

- id: Unique identifier

- nombre: First name

- apellido: Last name

- dni: National ID number

- fechaDeNacimiento: Birth date (DD-MM-YYYY format)

- domicilio: Address

- cursada: Current year (1-5)

- periodo: Academic year

## Styling

### The application uses CSS with:

- Responsive grid layouts

- Dark/light mode support

- Consistent spacing and typography

- Print-friendly styles for student details

## Dependencies

### Production:

- react ^19.0.0

- react-dom ^19.0.0

- react-router-dom ^7.4.1

- sweetalert2 ^11.17.2

### Development:

- @vitejs/plugin-react-swc ^3.8.0

- eslint ^9.21.0

- vite ^6.2.0

## License

This project is open source and available under the MIT License.
