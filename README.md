# User Management Dashboard

## Overview

This project is a fully functional web application capable of fetching and displaying detailed user data from an external API. It assesses proficiency in DOM manipulation, handling complex JavaScript objects, and interacting with an API in real-time.

### Technologies Used
- **React**: Front-end library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **Jest**: JavaScript testing framework.
- **Babel**: JavaScript compiler.
- **Tailwind CSS**: Utility-first CSS framework.

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd user-management-dashboard

 2. Install dependencies:
    ```bash
    npm install


3. Start the development server:
    ```bash
    npm start


4. Run tests:
    ```bash
    npm test


### Project Structure
The project is organized into multiple components, each handling a distinct part of the user interface and functionality.
  ```bash
      src/
│
├── components/
│   ├── FilterInput/
│   │   ├── index.tsx         # FilterInput component
│   │   ├── index.test.tsx    # Unit tests for FilterInput
│   │   └── types.ts          # TypeScript types for FilterInput
│   ├── Grid/
│   │   ├── index.tsx         # Grid component to display user data in a table
│   │   ├── index.test.tsx    # Unit tests for Grid
│   │   └── types.ts          # TypeScript types for Grid
│   └── SimpleMap/
│       ├── index.tsx         # SimpleMap component for displaying user location
│       ├── index.test.tsx    # Unit tests for SimpleMap
│       └── types.ts          # TypeScript types for SimpleMap
│
└── App.tsx                   # Main application component
