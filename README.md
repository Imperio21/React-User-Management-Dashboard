# User Management Dashboard

## Overview

This project is a fully functional web application capable of fetching and displaying detailed user data from an external API. It assesses proficiency in DOM manipulation, handling complex JavaScript objects, and interacting with an API in real-time.

### Technologies Used

- **React**: Front-end library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **Jest**: JavaScript testing framework.
- **Babel**: JavaScript compiler.
- **Tailwind CSS**: Utility-first CSS framework.



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


## Project Structure

1. The project is organized into multiple components, each handling a distinct part of the user interface and functionality.

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


## Usage
To use the application, simply enter a user name in the input field and click the "Fetch Users" button. The application will fetch user data from the external API and display it in a grid format. You can click on a user to see their location on the map.

## Running Tests
1. The project includes unit tests for each component. To run the tests, use the following command:
   ``` bash
   npm test

## Future Enhancements
- **Debounced Search**: Implement a debounce function to improve the user search experience by reducing unnecessary API calls while typing.
- **Error Handling**: Provide more user-friendly and detailed error messages when an API request fails.
- **Responsive Design**: Further optimize the grid layout for mobile devices to improve the user experience on smaller screens.

## Conclusion
The User Management Dashboard demonstrates a modular, component-driven approach to building a web application using React, TypeScript, and Jest. With real-time API integration and an intuitive interface, it is a robust example of how to structure, style, and test a scalable React application.
