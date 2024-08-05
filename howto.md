Nick Ater: I want to build an app that allows users to make predictions about the future and share them with friends. I also want the predictions to be able to be a communal interaction - so I could pose a question, share it with friends, and they make a locked prediction. Once made, it can't be edited. But once the time expires, or everyone votes to reveal it, all predictions are shown. Give me a detailed layout of the data model I would need, including auth and allowing connections between friends for the question sharing. Also create a step by step guide for what all I need to account for when building this app

---

Raycast AI: ### Data Model for Prediction Sharing App

#### 1. **Users**
-  **User**: Represents the users in the application.

| Field         | Type     | Description                          |
| ------------- | -------- | ------------------------------------ |
| id            | UUID     | Unique identifier for the user.      |
| username      | String   | Unique username for the user.        |
| email         | String   | Email address of the user.           |
| password_hash | String   | Hashed password for authentication.  |
| created_at    | DateTime | Timestamp when the user was created. |
| friends       | [User]   | List of friend relationships.        |

#### 2. **Auth Tokens**
-  **AuthToken**: Handles authentication tokens for user sessions.

| Field   | Type     | Description                      |
| ------- | -------- | -------------------------------- |
| id      | UUID     | Unique identifier for the token. |
| user_id | UUID     | Reference to the user.           |
| token   | String   | Auth token for the session.      |
| expiry  | DateTime | Expiry time of the token.        |

#### 3. **Questions**
-  **Question**: Represents the questions posed by users.

| Field      | Type     | Description                              |
| ---------- | -------- | ---------------------------------------- |
| id         | UUID     | Unique identifier for the question.      |
| user_id    | UUID     | Reference to the user who created it.    |
| text       | String   | The question text.                       |
| created_at | DateTime | Timestamp when the question was created. |

#### 4. **Predictions**
-  **Prediction**: Represents the users’ predictions.

| Field       | Type     | Description                                    |
| ----------- | -------- | ---------------------------------------------- |
| id          | UUID     | Unique identifier for the prediction.          |
| question_id | UUID     | Reference to the related question.             |
| user_id     | UUID     | Reference to the user who made it.             |
| text        | String   | The prediction text.                           |
| created_at  | DateTime | Timestamp when the prediction was made.        |
| is_revealed | Boolean  | Indicates if the prediction has been revealed. |

#### 5. **Friends**
-  **Friendship**: Represents the friendships between users.

| Field      | Type     | Description                                                  |
| ---------- | -------- | ------------------------------------------------------------ |
| id         | UUID     | Unique identifier for the friendship.                        |
| user_id    | UUID     | Reference to one of the users in friendship.                 |
| friend_id  | UUID     | Reference to the other user in friendship.                   |
| status     | Enum     | Status of the friendship (e.g., pending, accepted, blocked). |
| created_at | DateTime | Timestamp when the friendship was created.                   |

#### 6. **Reveals**
-  **Reveal**: Tracks the reveal actions for questions.

| Field       | Type     | Description                              |
| ----------- | -------- | ---------------------------------------- |
| id          | UUID     | Unique identifier for the reveal action. |
| question_id | UUID     | Reference to the related question.       |
| user_id     | UUID     | Reference to the user who initiated it.  |
| revealed_at | DateTime | Timestamp when the reveal was made.      |

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

---

Nick Ater: can you remake this in markdown?

---

Raycast AI: Sure! Here's the detailed layout in markdown:

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

---

Nick Ater: with predictions, how would we write react hooks to handle the query and mutation of all the scenarios?

---

Raycast AI: Sure! Here's how you can write React hooks to handle the query and mutation of predictions using a popular state management and data fetching library like React Query. We'll assume that you have a REST API endpoint for querying and mutating predictions.

### Setup with React Query

First, make sure you have `react-query` and `axios` installed in your project:

```bash
npm install react-query axios
```

### Query Hook for Fetching Predictions

We'll create a custom hook to fetch predictions for a specific question.

```jsx
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPredictions = async (questionId) => {
  const { data } = await axios.get(`/api/questions/${questionId}/predictions`);
  return data;
};

export const usePredictions = (questionId) => {
  return useQuery(['predictions', questionId], () => fetchPredictions(questionId));
};
```

### Mutation Hook for Creating a Prediction

We'll create a custom hook to handle the creation of a new prediction.

```jsx
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const createPrediction = async (newPrediction) => {
  const { data } = await axios.post(`/api/predictions`, newPrediction);
  return data;
};

export const useCreatePrediction = () => {
  const queryClient = useQueryClient();

  return useMutation(createPrediction, {
    onSuccess: () => {
      // Invalidate and refetch predictions after a new one is created
      queryClient.invalidateQueries('predictions');
    },
  });
};
```

### Mutation Hook for Revealing Predictions

We'll create a custom hook to handle revealing predictions.

```jsx
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const revealPredictions = async (questionId) => {
  const { data } = await axios.post(`/api/questions/${questionId}/reveal`);
  return data;
};

export const useRevealPredictions = () => {
  const queryClient = useQueryClient();

  return useMutation(revealPredictions, {
    onSuccess: () => {
      // Invalidate and refetch predictions after revealing
      queryClient.invalidateQueries('predictions');
    },
  });
};
```

### Example Usage in a Component

Here's how you can use these hooks in a React component:

```jsx
import React, { useState } from 'react';
import { usePredictions, useCreatePrediction, useRevealPredictions } from './hooks'; // Adjust the import path as necessary

const PredictionsComponent = ({ questionId }) => {
  const { data: predictions, isLoading, isError } = usePredictions(questionId);
  const createPrediction = useCreatePrediction();
  const revealPredictions = useRevealPredictions();

  const [newPrediction, setNewPrediction] = useState('');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading predictions.</div>;
  }

  const handleCreatePrediction = () => {
    createPrediction.mutate({ questionId, text: newPrediction });
    setNewPrediction('');
  };

  const handleRevealPredictions = () => {
    revealPredictions.mutate(questionId);
  };

  return (
    <div>
      <h2>Predictions for Question {questionId}</h2>
      <ul>
        {predictions.map((prediction) => (
          <li key={prediction.id}>{prediction.text}</li>
        ))}
      </ul>

      <input
        type="text"
        value={newPrediction}
        onChange={(e) => setNewPrediction(e.target.value)}
        placeholder="Enter your prediction"
      />
      <button onClick={handleCreatePrediction}>Submit Prediction</button>

      <button onClick={handleRevealPredictions}>Reveal Predictions</button>
    </div>
  );
};

export default PredictionsComponent;
```

### Summary

1. **Setup React Query**: Install and configure React Query in your project.
2. **Create Query Hook**: `usePredictions` for fetching predictions of a specific question.
3. **Create Mutation Hooks**:
   - `useCreatePrediction` for creating new predictions.
   - `useRevealPredictions` for revealing predictions.
4. **Use Hooks in Component**: Implement the hooks in a React component to handle fetching, creating, and revealing predictions. 

This approach provides a robust way to manage server state in your application using React Query, ensuring reactivity and efficient data fetching.

---

Nick Ater: is it good practice to name a hook after a verb? Or noun?

---

Raycast AI: When naming hooks in React, it's generally good practice to follow these guidelines:

### 1. **Custom Hook Naming Convention**
-  **Prefix with "use"**: All custom hooks should start with the word "use" to indicate that they are hooks. This is a convention enforced by the React Hook linter rules.
-  **Action-Oriented (Verb)**: Custom hooks are often named with verbs to indicate what they do or what action they perform. This makes the purpose of the hook clear.

### 2. **Examples**

-  `useFetchData`: Clearly indicates that this hook fetches data.
-  `useAuth`: Indicates that this hook handles authentication.
-  `useLocalStorage`: Indicates that this hook interacts with local storage.

### 3. **Guideline for Query and Mutation Hooks**

-  **Query Hooks**: Typically, these are named with verbs related to fetching or retrieving data.
  - Examples: `useFetchPredictions`, `useGetUser`, `useLoadPosts`.

-  **Mutation Hooks**: These are often named with verbs indicating actions or changes.
  - Examples: `useCreatePrediction`, `useUpdateUser`, `useDeletePost`.

### Applying This to Your Hooks

Given the hooks you have for querying and mutating predictions, here are some refined names following best practices:

#### Query Hook

```jsx
// Fetching predictions for a specific question
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPredictions = async (questionId) => {
  const { data } = await axios.get(`/api/questions/${questionId}/predictions`);
  return data;
};

export const useFetchPredictions = (questionId) => {
  return useQuery(['predictions', questionId], () => fetchPredictions(questionId));
};
```

#### Mutation Hooks

```jsx
// Creating a new prediction
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const createPrediction = async (newPrediction) => {
  const { data } = await axios.post(`/api/predictions`, newPrediction);
  return data;
};

export const useCreatePrediction = () => {
  const queryClient = useQueryClient();

  return useMutation(createPrediction, {
    onSuccess: () => {
      // Invalidate and refetch predictions after a new one is created
      queryClient.invalidateQueries('predictions');
    },
  });
};

// Revealing predictions
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const revealPredictions = async (questionId) => {
  const { data } = await axios.post(`/api/questions/${questionId}/reveal`);
  return data;
};

export const useRevealPredictions = () => {
  const queryClient = useQueryClient();

  return useMutation(revealPredictions, {
    onSuccess: () => {
      // Invalidate and refetch predictions after revealing
      queryClient.invalidateQueries('predictions');
    },
  });
};
```

### Example Usage in a Component

Here's how you can use these hooks in a React component:

```jsx
import React, { useState } from 'react';
import { useFetchPredictions, useCreatePrediction, useRevealPredictions } from './hooks'; // Adjust the import path as necessary

const PredictionsComponent = ({ questionId }) => {
  const { data: predictions, isLoading, isError } = useFetchPredictions(questionId);
  const createPrediction = useCreatePrediction();
  const revealPredictions = useRevealPredictions();

  const [newPrediction, setNewPrediction] = useState('');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading predictions.</div>;
  }

  const handleCreatePrediction = () => {
    createPrediction.mutate({ questionId, text: newPrediction });
    setNewPrediction('');
  };

  const handleRevealPredictions = () => {
    revealPredictions.mutate(questionId);
  };

  return (
    <div>
      <h2>Predictions for Question {questionId}</h2>
      <ul>
        {predictions.map((prediction) => (
          <li key={prediction.id}>{prediction.text}</li>
        ))}
      </ul>

      <input
        type="text"
        value={newPrediction}
        onChange={(e) => setNewPrediction(e.target.value)}
        placeholder="Enter your prediction"
      />
      <button onClick={handleCreatePrediction}>Submit Prediction</button>

      <button onClick={handleRevealPredictions}>Reveal Predictions</button>
    </div>
  );
};

export default PredictionsComponent;
```

### Summary

-  **Query Hooks**: Use verbs that indicate fetching or retrieving data (e.g., `useFetchPredictions`).
-  **Mutation Hooks**: Use verbs that indicate creating, updating, or deleting data (e.g., `useCreatePrediction`, `useRevealPredictions`).
-  **Consistency**: Maintain consistent naming conventions for clarity and maintainability.

By following these naming conventions, your hooks will be more understandable and maintainable, making it easier for other developers (and future you) to understand their purpose and usage.

---

Nick Ater: Can you make a step by step process for building a react native app that matches the initial description?

---

Raycast AI: Sure! Here is a detailed step-by-step process for building a React Native app that allows users to make predictions about the future, share them with friends, and reveal them based on a timer or group consensus.

### Step 1: Set Up Your Development Environment

1. **Install Node.js and npm**: 
   - Download and install from [nodejs.org](https://nodejs.org/).

2. **Install React Native CLI**:
   ```bash
   npm install -g react-native-cli
   ```

3. **Set Up Your React Native Project**:
   ```bash
   npx react-native init PredictionApp
   ```

### Step 2: Set Up Backend with Node.js and Express

1. **Initialize your backend project**:
   ```bash
   mkdir prediction-backend
   cd prediction-backend
   npm init -y
   ```

2. **Install necessary dependencies**:
   ```bash
   npm install express mongoose bcryptjs jsonwebtoken
   ```

3. **Set Up Express Server**:
   - Create an `index.js` file:
     ```javascript
     const express = require('express');
     const mongoose = require('mongoose');
     const app = express();
     const PORT = process.env.PORT || 5000;

     app.use(express.json());

     mongoose.connect('your_mongodb_connection_string', { useNewUrlParser: true, useUnifiedTopology: true })
       .then(() => console.log('MongoDB connected'))
       .catch(err => console.error(err));

     app.listen(PORT, () => {
       console.log(`Server running on port ${PORT}`);
     });
     ```

### Step 3: Define Backend Models and Routes

1. **Create User Model**:
   - Create a `models/User.js` file:
     ```javascript
     const mongoose = require('mongoose');

     const UserSchema = new mongoose.Schema({
       username: { type: String, required: true, unique: true },
       email: { type: String, required: true, unique: true },
       password: { type: String, required: true },
       created_at: { type: Date, default: Date.now },
       friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
     });

     module.exports = mongoose.model('User', UserSchema);
     ```

2. **Create Question and Prediction Models**:
   - Create a `models/Question.js` file:
     ```javascript
     const mongoose = require('mongoose');

     const QuestionSchema = new mongoose.Schema({
       user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
       text: { type: String, required: true },
       created_at: { type: Date, default: Date.now },
     });

     module.exports = mongoose.model('Question', QuestionSchema);
     ```

   - Create a `models/Prediction.js` file:
     ```javascript
     const mongoose = require('mongoose');

     const PredictionSchema = new mongoose.Schema({
       question_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
       user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
       text: { type: String, required: true },
       created_at: { type: Date, default: Date.now },
       is_revealed: { type: Boolean, default: false },
     });

     module.exports = mongoose.model('Prediction', PredictionSchema);
     ```

3. **Create Routes for Authentication, Questions, and Predictions**:
   - Create `routes/auth

---

Nick Ater: I'm using supabase

---

Raycast AI: Sure! Here's a step-by-step guide to building a React Native app that allows users to make predictions about the future, share them with friends, and reveal them after a specified time or through user votes, using Supabase for the backend.

### Prerequisites

1. **Node.js** installed
2. **Expo CLI** or **React Native CLI** installed
3. **Supabase** account and project setup

### Step 1: Set Up React Native Project

#### Using Expo

```bash
npx expo-cli init predictionApp
cd predictionApp
```

#### Using React Native CLI

```bash
npx react-native init PredictionApp
cd PredictionApp
```

### Step 2: Set Up Supabase

1. **Create a new project** on the [Supabase dashboard](https://supabase.io/).
2. **Add tables** in Supabase for Users, Predictions, Questions, and Friendships according to the data model provided earlier.
3. **Get your Supabase API URL and Key** from the Supabase project settings.

### Step 3: Install Required Dependencies

```bash
npm install @supabase/supabase-js react-query axios
```

### Step 4: Initialize Supabase Client

Create a file `supabaseClient.js` and initialize the Supabase client.

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-supabase-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);
```

### Step 5: Set Up React Query

Create a file `queryClient.js` and initialize React Query client.

```javascript
import { QueryClient } from 'react-query';

export const queryClient = new QueryClient();
```

### Step 6: Create Authentication Hooks

Create a file `useAuth.js` for authentication hooks.

```javascript
import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.session();
    setUser(session?.user ?? null);

    const { data: authListener } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  const signIn = async (email, password) => {
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) throw error;
    setUser(user);
  };

  const signUp = async (email, password) => {
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    setUser(user);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return {
    user,
    signIn,
    signUp,
    signOut,
  };
};
```

### Step 7: Create Hooks for Predictions

Create a file `usePredictions.js` for handling predictions.

```javascript
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { supabase } from './supabaseClient';

const fetchPredictions = async (questionId) => {
  const { data, error } = await supabase
    .from('predictions')
    .select('*')
    .eq('question_id', questionId);
  if (error) throw error;
  return data;
};

export const useFetchPredictions = (questionId) => {
  return useQuery(['predictions', questionId], () => fetchPredictions(questionId));
};

const createPrediction = async (newPrediction) => {
  const { data, error } = await supabase
    .from('predictions')
    .insert(newPrediction);
  if (error) throw error;
  return data;
};

export const useCreatePrediction = () => {
  const queryClient = useQueryClient();

  return useMutation(createPrediction, {
    onSuccess: () => {
      queryClient.invalidateQueries('predictions');
    },
  });
};

const revealPredictions = async (questionId) => {
  const { data, error } = await supabase
    .from('predictions')
    .update({ is_revealed: true })
    .eq('question_id', questionId);
  if (error) throw error;
  return data;
};

export const useRevealPredictions = () => {
  const queryClient = useQueryClient();

  return useMutation(revealPredictions, {
    onSuccess: () => {
      queryClient.invalidateQueries('predictions');
    },
  });
};
```

### Step 8: Create Components

#### Authentication Component

Create a simple authentication component `Auth.js`.

```javascript
import React, { useState } from 'react';
import { useAuth } from './useAuth';

const Auth = () => {
  const { signIn, signUp } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async () => {
    try {
      if (isSignUp) {
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </button>
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Switch to Sign In' : 'Switch to Sign Up'}
      </button>
    </div>
  );
};

export default Auth;
```

#### Predictions Component

Create a component `PredictionsComponent.js`.

```javascript
import React, { useState } from 'react';
import { useFetchPredictions, useCreatePrediction, useRevealPredictions } from './usePredictions';

const PredictionsComponent = ({ questionId }) => {
  const { data: predictions, isLoading, isError } = useFetchPredictions(questionId);
  const createPrediction = useCreatePrediction();
  const revealPredictions = useRevealPredictions();

  const [newPrediction, setNewPrediction] = useState('');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading predictions.</div>;
  }

  const handleCreatePrediction = () => {
    createPrediction.mutate({ question_id: questionId, text: newPrediction });
    setNewPrediction('');
  };

  const handleRevealPredictions = () => {
    revealPredictions.mutate(questionId);
  };

  return (
    <div>
      <h2>Predictions for Question {questionId}</h2>
      <ul>
        {predictions.map((prediction) => (
          <li key={prediction.id}>{prediction.text}</li>
        ))}
      </ul>

      <input
        type="text"
        value={newPrediction}
        onChange={(e) => setNewPrediction(e.target.value)}
        placeholder="Enter your prediction"
      />
      <button onClick={handleCreatePrediction}>Submit Prediction</button>

      <button onClick={handleRevealPredictions}>Reveal Predictions</button>
    </div>
  );
};

export default PredictionsComponent;
```

### Step 9: Integrate Components in Main App

Modify `App.js` to include your components.

```javascript
import React from 'react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './queryClient';
import Auth from './Auth';
import PredictionsComponent from './PredictionsComponent';
import { useAuth } from './useAuth';

const App = () => {
  const { user } = useAuth();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        {user ? (
          <PredictionsComponent questionId="example-question-id" />
        ) : (
          <Auth />
        )}
      </div>
    </QueryClientProvider>
  );
};

export default App;
```

### Step 10: Run Your App

#### Using Expo

```bash
expo start
```

#### Using React Native CLI

```bash
npx react-native run-android
# or
npx react-native run-ios
```

### Summary

1. **Set up the React Native project**: Initialize using Expo or React Native CLI.
2. **Configure Supabase**: Set up the backend with tables and get API keys.
3. **Install dependencies**: React Query, axios, and Supabase client.
4. **Initialize Supabase client**: Create `supabaseClient.js`.
5. **Initialize React Query client**: Create `queryClient.js`.
6. **Create authentication hooks**: Handle user authentication in `useAuth.js`.
7. **Create prediction hooks**: Handle predictions with `usePredictions.js`.
8. **Create components**: Build authentication and prediction components.
9. **Integrate components in the main app**: Modify `App.js`.
10. **Run the app**: Use Expo or React Native CLI to run the application.

This guide should provide a comprehensive roadmap to building your prediction sharing app with React Native and Supabase.