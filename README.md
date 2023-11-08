# Threads - A Next.js Social Media App

![Threads Logo](public/assets/logo.svg)

**Threads** is a social media app built with Next.js. It allows users to create threads, post updates, and interact with other users. This README will provide you with information on setting up, running, and using Threads.

## Prerequisites

Before getting started with Threads, ensure you have the following prerequisites installed on your system:

- Node.js
- npm
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/EzzElddin-AbdAllah/threads

   cd threads
   ```

2. Install the project dependencies: `npm install`
3. Create a .env.local File:

   Create a `.env.local` file in the root of your project and add the following environment variables:

   ```plaintext
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-public-key>
   CLERK_SECRET_KEY=<your-secret-key>
   NEXT_CLERK_WEBHOOK_SECRET=<webhook-secret>
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=<sign-in-url>
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=<sign-up-url>
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=<after-sign-in-url>
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=<after-sign-up-url>
   MONGODB_URL=<your-mongodb-url>
   UPLOADTHING_SECRET=<your-uploadthing-secret>
   UPLOADTHING_APP_ID=<your-uploadthing-app-id>

   ```

4. npm run dev

The app should now be running at http://localhost:3000.

## Usage

- Sign in or sign up to start using the app.
- Explore threads, communities, and profiles.
- Create new threads, post comments, and interact with other users.

## Live Deployed Version

You can access the live version of Threads by following this link: [Live Threads App](https://threads-ezzelddin-abdallahs-projects.vercel.app).

Feel free to explore the app and interact with other users in real-time.

## Screenshots

Here are some screenshots of the Threads app:

- **Home Page:**

  ![Home Page](/screenshots/home.png)

- **Profile Page:**

  ![Profile Page](/screenshots/profile.png)

- **Communities View:**

  ![Communities View](/screenshots/communities.png)
