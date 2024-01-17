<!-- @format -->

# Registro di Classe

I.E.: Class Register

## Collaborators

- Alberto Cangialosi
- Gabriele Di Grazia
- Marco Corsini
- Rita Ciaramitaro

Or in short, **`Team GAMR`**

## Mockup

[Mockup figma](https://www.figma.com/proto/YlF3tlPt2gBhS4TNmoV6ho/registro-di-classe?type=design&node-id=9-306&t=4LIHayekcea0abQ4-1&scaling=min-zoom&page-id=0%3A1&mode=design)

<!-- Place Holder for finished product screenshots -->

## Description

The Class Register is a web application designed to manage the list of students in a class. It provides an intuitive user interface to add, view, modify, and delete information about students, as well as record attendance for lectures and assign grades.

## Key Features

- Add new students with details such as name, last name, email, etc.
- Record the attendance of students in lectures.
- Assign and view grades for students.
- View the complete list of students with detailed information.
- Modify information about existing students.
- Delete students from the register.
- Record lectures and their topics.

## Interfaces Structure (in JavaScript)

```js
// JavaScript equivalent for TRegister interface
let TRegister = {
  id: '',
  name: '',
  students: [],
  votes: [],
  attendances: [],
};

// JavaScript equivalent for TStudent interface
let TStudent = {
  id: '',
  name: '',
  lastName: '',
  email: '',
  lectures: [],
};

// JavaScript equivalent for TAttendance interface
let TAttendance = {
  id: '',
  date: new Date(),
  argument: '',
  students: [], // array of objects {name, arrival, departure}
};
```

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js

- **Dev Dependencies:**
  `Prettier`,
  `Husky`,
  `CommitLint`

## Installation

1. Clone the repository to your computer:

   ```bash
   git clone https://github.com/yourname/class-register.git
   ```

2. Navigate to the project directory:

   ```bash
   cd class-register
   ```

> [!NOTE]
>
> **npm**: Stands for Node Package Manager. It is the default package manager for Node.js, and it helps manage the dependencies and packages for your Node.js projects. [More on how to install Node.js!](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

3. Install dependencies:

   ```bash
   npm install
   ```

<!-- 4. Run the application: -->
<!--
    ```bash
    node app.js
    ```
 -->

<!-- 5. Open your browser and go to [http://localhost:5000](http://localhost:5000). -->

## Contributions

We welcome contributions! If you'd like to contribute, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`.
3. Commit your changes: `git commit -m 'Added new feature'`.
4. Push your branch: `git push origin feature/new-feature`.
5. Submit a pull request.
