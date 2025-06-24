# Job Portal

A full-stack Job Portal application built with the MERN stack (MongoDB, Express.js, React, Node.js). Users can register, post jobs, and apply for jobs.

## Features

- User authentication (register/login)
- Role-based access (job seekers & employers)
- Post, edit, and delete job listings (employers)
- Search and filter jobs (job seekers)
- Apply to jobs
- Responsive UI

## Tech Stack

- **Frontend:** React.js (see [`Frontend`](https://github.com/shivamprajapati123/Job_Portal_Frontend))
- **Backend:** Node.js, Express.js (see [`Backend`](`https://github.com/shivamprajapati123/Job_Portal_Backend/))
- **Database:** MongoDB

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB

### Backend Setup

1. Go to the backend directory:

    ```sh
    cd Backend
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file (see `.env.example` if available) and set your environment variables (MongoDB URI, JWT secret, etc).

4. Start the backend server:

    ```sh
    npm run dev
    ```

### Frontend Setup

1. Go to the frontend directory:

    ```sh
    cd ../Frontend
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the frontend development server:

    ```sh
    npm start
    ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app.

## Folder Structure

```
Job_Portal/
  Backend/      # Express.js API
  Frontend/     # React.js client
```

## Deployment

You can deploy the backend and frontend separately (e.g., Vercel, Netlify, Heroku, Render, etc.).

## License

This project is licensed under the MIT License.

---

Feel free to contribute or open issues!
