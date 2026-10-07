Display Spring Boot Courses in React

Name: Rahimullah Ebrahimkhail
Course: Enterprise Web Application


How to Run
Backend — Spring Boot

Start the Spring Boot project on:

http://localhost:8080

Course API:

GET http://localhost:8080/api/v1/courses
Frontend — React

Open a terminal in the React project folder:

npm install
npm run dev -- --port 5174

Open:

http://localhost:5174

Both the backend and frontend must be running at the same time.

Questions
Why use useEffect here?

useEffect is used to fetch the courses when the React component loads.

What does setCourses do?

setCourses stores the courses received from the backend in React state and updates the table.

Why can Postman work while a browser request fails?

Postman is not restricted by browser CORS rules. The browser requires the backend to allow the frontend origin.

