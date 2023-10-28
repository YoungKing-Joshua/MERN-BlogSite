# MERN Blog Site

## Introduction

Welcome to the MERN Blog Site, a full-stack web application for creating and managing your own blog. This site is built using the MERN stack, which consists of MongoDB, Express.js, React, and Node.js. It provides a platform for users to write, edit, and publish their articles and share their thoughts with the world.

## Features

- **User Authentication**: Users can create accounts, log in, and securely manage their blog posts.

- **Create and Edit Posts**: Easily create new blog posts and edit existing ones using a user-friendly interface.

- **Comment System**: Engage with readers through a comment system, allowing for discussions and feedback on your articles.

- **Category Tags**: Organize your blog posts using category tags, making it easier for readers to find content they are interested in.

- **User Profiles**: Each user has their own profile, showcasing their published articles and personal information.

- **Search Functionality**: Quickly search for specific blog posts or topics of interest.

- **Responsive Design**: The site is designed to work seamlessly on both desktop and mobile devices.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB set up and running locally or on a cloud service.
- A code editor for development, such as Visual Studio Code.

### Installation

1. Clone this repository to your local machine.

```bash
git clone https://github.com/yourusername/mern-blog-site.git
```

2. Change to the project directory.

```bash
cd mern-blog-site
```

3. Install server dependencies.

```bash
npm install
```

4. Change to the client directory and install client dependencies.

```bash
cd client
npm install
```

5. Configure your environment variables:
   - Create a `.env` file in the root directory and set up the following variables:
     - `MONGODB_URI`: Your MongoDB connection URI.
     - `JWT_SECRET`: A secret key for JWT token generation.
     - `PORT`: Port for the server (e.g., 5000).
   - In the `client` directory, create a `.env` file and set the `REACT_APP_API_URL` variable to the URL of your backend server (e.g., `http://localhost:5000`).

6. Start the server and client:

In the root directory, run:

```bash
npm run dev
```

This command will concurrently start the server and client, and your MERN blog site will be accessible at `http://localhost:5173`.


## Author

[Joshua Dei-Alorse]


Enjoy your MERN Blog Site and happy blogging!