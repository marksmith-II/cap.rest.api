# SAP CAPM REST API Consumption Tutorial Project

## Description

This project was created following a tutorial by Somnath Paul on how to consume REST APIs within SAP Cloud Application Programming Model (CAPM) backend services. The tutorial demonstrates the process using the JSON Placeholder API, a free online REST API for testing purposes.

The project covers:

* **Service Definition:** Defining function imports and actions in a CAPM service file (`todo-task.cds`) to interact with the REST API.
* **Local Binding:** Demonstrating local binding of the REST API within the CAP service for simplicity, suitable for development and learning.
* **Backend Logic Implementation:** Creating a backend service logic file (`todo-task-service.js`) to connect to the REST API and implement the logic for retrieving and creating data.
* **Testing:** Testing the API endpoints using a dedicated test file (`test.http`) and debugging the CAPM service with VS Code.

This project serves as a practical guide for developers looking to integrate REST APIs into their SAP CAPM applications. It provides a clear and concise example, ideal for learning the fundamentals of REST API consumption in CAPM.

## Getting Started

To get started with this project, you will need:

* Node.js and npm installed.
* SAP Cloud Application Programming Model (CAPM) tools installed and configured.
* VS Code (recommended) with relevant extensions for CAPM development.

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/marksmith-II/cap.rest.api.get
    ```

2.  Navigate to the project directory:

    ```bash
    cd <project_directory>
    ```

3.  Install dependencies:

    ```bash
    npm install
    ```

### Running the Application

1.  Start the CAPM service:

    ```bash
    cds watch
    ```

2.  You can then test the API endpoints using the `test.http` file in VS Code or any other REST client.

### Testing

* Use the `test.http` file provided in the project to test the API endpoints.
* You can also use tools like Postman or curl to test the API.
* Debug the CAPM service in VS Code by setting breakpoints in the `todo-task-service.js` file.


