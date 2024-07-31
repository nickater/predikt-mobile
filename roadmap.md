### Data Model for Prediction Sharing App

#### 1. **Users**
Represents the users in the application.

| Field           | Type     | Description                          |
| --------------- | -------- | ------------------------------------ |
| `id`            | UUID     | Unique identifier for the user.      |
| `username`      | String   | Unique username for the user.        |
| `email`         | String   | Email address of the user.           |
| `password_hash` | String   | Hashed password for authentication.  |
| `created_at`    | DateTime | Timestamp when the user was created. |
| `friends`       | [User]   | List of friend relationships.        |

#### 2. **Auth Tokens**
Handles authentication tokens for user sessions.

| Field     | Type     | Description                      |
| --------- | -------- | -------------------------------- |
| `id`      | UUID     | Unique identifier for the token. |
| `user_id` | UUID     | Reference to the user.           |
| `token`   | String   | Auth token for the session.      |
| `expiry`  | DateTime | Expiry time of the token.        |

#### 3. **Questions**
Represents the questions posed by users.

| Field        | Type     | Description                              |
| ------------ | -------- | ---------------------------------------- |
| `id`         | UUID     | Unique identifier for the question.      |
| `user_id`    | UUID     | Reference to the user who created it.    |
| `text`       | String   | The question text.                       |
| `created_at` | DateTime | Timestamp when the question was created. |

#### 4. **Predictions**
Represents the users’ predictions.

| Field         | Type     | Description                                    |
| ------------- | -------- | ---------------------------------------------- |
| `id`          | UUID     | Unique identifier for the prediction.          |
| `question_id` | UUID     | Reference to the related question.             |
| `user_id`     | UUID     | Reference to the user who made it.             |
| `text`        | String   | The prediction text.                           |
| `created_at`  | DateTime | Timestamp when the prediction was made.        |
| `is_revealed` | Boolean  | Indicates if the prediction has been revealed. |

#### 5. **Friends**
Represents the friendships between users.

| Field        | Type     | Description                                                  |
| ------------ | -------- | ------------------------------------------------------------ |
| `id`         | UUID     | Unique identifier for the friendship.                        |
| `user_id`    | UUID     | Reference to one of the users in friendship.                 |
| `friend_id`  | UUID     | Reference to the other user in friendship.                   |
| `status`     | Enum     | Status of the friendship (e.g., pending, accepted, blocked). |
| `created_at` | DateTime | Timestamp when the friendship was created.                   |

#### 6. **Reveals**
Tracks the reveal actions for questions.

| Field         | Type     | Description                              |
| ------------- | -------- | ---------------------------------------- |
| `id`          | UUID     | Unique identifier for the reveal action. |
| `question_id` | UUID     | Reference to the related question.       |
| `user_id`     | UUID     | Reference to the user who initiated it.  |
| `revealed_at` | DateTime | Timestamp when the reveal was made.      |

### Step-by-Step Guide to Building the App

#### 1. **Setting up the Project**
   - Choose a tech stack (e.g., React Native for the app, Node.js/Express.js for the backend, PostgreSQL for the database).
   - Initialize your project and set up your development environment.

#### 2. **Authentication**
   - Implement user registration and authentication (sign up, login, logout, password reset, etc.).
   - Use JWT tokens for session management.
   - Ensure secure password handling with hashing (e.g., bcrypt).

#### 3. **User Management**
   - Develop User model and APIs for profile management.
   - Implement friend request functionality to handle sending, accepting, and blocking friend requests.
   - Create UI for managing friend lists.

#### 4. **Question and Prediction Handling**
   - Develop models and CRUD APIs for questions and predictions.
   - Implement functionality for creating questions and making predictions.
   - Ensure predictions are locked after submission and cannot be edited.

#### 5. **Reveal Mechanism**
   - Implement the reveal mechanism which allows revealing predictions based on time expiry or user votes.
   - Create UI to show predictions once revealed.

#### 6. **Real-time Features**
   - Use websockets (e.g., Socket.io) for real-time updates so users can see when predictions are revealed.
   - Implement live notifications for friend requests, question sharing, and reveals.

#### 7. **Testing**
   - Write unit tests for your backend and frontend components.
   - Perform integration tests to ensure all parts of the system work together seamlessly.

#### 8. **Deployment**
   - Set up a cloud environment (e.g., AWS, GCP, or Heroku) for deploying your backend and database.
   - Use a CI/CD pipeline for smooth deployments (e.g., GitHub Actions or Jenkins).

#### 9. **Security**
   - Ensure all data is transmitted over HTTPS.
   - Implement rate limiting and input validation to protect against DDOS and injection attacks.
   - Regularly update dependencies to patch vulnerabilities.

#### 10. **User Interface & Experience**
   - Focus on providing a responsive and intuitive UI.
   - Implement UX best practices for ease of use, especially around key features like creating questions, making predictions, and social interactions.

#### 11. **Analytics & Monitoring**
   - Integrate tools like Google Analytics to track user interaction.
   - Set up monitoring and logging (e.g., with New Relic or ELK Stack) for application health and performance.

#### 12. **Feedback and Iteration**
   - Launch a beta version to collect user feedback.
   - Iterate based on feedback to refine features and fix bugs.

This blueprint should provide a comprehensive guide to building your prediction sharing app.