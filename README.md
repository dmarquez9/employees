TASK 

Create a full stack application from scratch.

Use TypeScript , NodeJS, ReactJS, GraphQL and a non relational database. We will build a simple HR System!

REQUIREMENTS
- Employee Types
- Users should be able to create employee types, they have a name and a color that they will be used to be referenced on the UI. There can't be two employee types with the same name or with the same color.
- Users should be able to edit employee types, both color and name
- Users should be able to delete employee types, only if there are not employees with that employee type.
- Employees
- Users should be able to create employees, an employee has a name creation date and an employee type.
- Users should be able to edit employees, they can edit both name and employee type.
- Users should be able to delete employees.
- Users should be able to reset the system, deleting all employees and employee types.

NON-FUNCTIONAL REQUIREMENTS
- Do not use authentication.
- Use material ui native elements for the UI

DELIVERABLE: Create a Github repository and add @jdguzmans to it. The structure of this repo should be a docker-compose file with the external services you decide to use (database, in-memory database, etc), and two folders, `back` and `front`. Each folder will contain a package.json with its dependencies, and each one should be able to be executed using npm run start.

BONUS
- Deploy this on Netlify and Heroku, they have free tiers so there is no need to pay for anything.
