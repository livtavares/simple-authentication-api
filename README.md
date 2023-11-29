# 🚀 Simple authentication API
An Node.js backend powered by Express and MongoDB, offering seamless authentication API. Built with TypeScript for enhanced code quality and maintainability.

🔗 Feel free to explore the code and contribute!

## Key Features:

1. Authentication: Secure user authentication with token-based access control.
2. Database Integration: MongoDB integration for efficient data storage.
3. Express API: API for user registration, login, and essential operations.
4. TypeScript Support: Improved code quality and maintainability.
5. Scalability: Designed for scalability to handle growing user loads.
6. Security Measures: Password hashing and protection against common vulnerabilities.
7. Configuration: Easily configurable settings for different environments.

## Technologies Used:

1. Node.js
2. Express.js
3. MongoDB
4. TypeScript
    

## Getting Started:

1. Clone the Repository:

```sh
git clone https://github.com/livtavares/simple-authentication-api.git
```

3. Navigate to the Project Directory:

```sh
cd login-app-backend
```

5. Install Dependencies:

```sh
 npm install
```

7. Configure Environment Variables:
   - Create a .env file in the project root.
   - (Optional) Define environment the variable PORT
      - The default is 8080

8. Run the Application:

```sh
 node dist/server.js
```
9. Explore the API:

    - The API is now accessible at http://localhost:PORT, where PORT is the configured port or 8080 (default).
    - Use tools like Insomnia or Postman to interact with the API endpoints (e.g., user registration, login).



10. Issues and Feedback:

    - Report any issues or provide feedback by creating GitHub issues.

## Usage:

#### User Registration:

Send a POST request to _/api/auth/register_ with the user's username, email, and password in the request body.

```json
 {
  "username": "example_user",
  "email": "user@example.com",
  "password": "securepassword"
}

```

#### User Login:
Send a POST request to _/api/auth/login_ with the user's username and password in the request body and **receive a JSON response** with an authentication token.

```json
{
  "username": "example_user",
  "password": "securepassword"
}
```

## Contributing:

- Issues:

    - Report any issues or bugs you encounter through the GitHub issue tracker.

- Feature Requests:

    - Suggest new features or improvements by opening a GitHub issue. Describe the proposed enhancement and its use case.

- Pull Requests:

    - Contribute code improvements or new features by submitting a pull request.
    - Fork the repository, create a new branch for your changes, and submit the pull request against the main branch.

- Code Guidelines:

    Follow the existing code style and structure.
    Ensure that your changes pass the existing tests and add new tests if applicable.

- Code Reviews:

    - Participate in code reviews by providing constructive feedback on pull requests.



- Spread the Word:

    - Share the project with others who might find it useful.
    - Star the repository on GitHub to show your support.
## License:

MIT



