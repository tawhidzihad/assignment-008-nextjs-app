# Booklend

## Booklend is a digital book borrowing platform where users can browse, borrow, and manage books online. It features authentication, pricing plans, and activity tracking for a seamless user experience with responsive design.

### Key Features

- User authentication
   - Register
   - Login
   - Continue with Google
- Browse & filter books by category
- Search books by book title
- Pricing plans system
- Fast & Responsive UI

<hr>

<br>

### Tools & Technologies

- JavaScript
- NextJS
- TailwindCSS
- DaisyUI
- BetterAuth
- MongoDB
- NPM
   - JSON-Server
   - Animate.css
   - React Hook Form
   - React Icons
   - React Fast Marquee
   - React-Toastify

<hr>

<br>

## Setup & Run Locally

### 1. Clone this repository

`git clone https://github.com/tawhidzihad/assignment-008-nextjs-app.git`

### 2. Go to project folder

`cd booklend`

### 3. Install dependencies

`npm install`

### [4. Setup environment variables](#environment-variables)

`Create a .env file in root of the project`

### 5. Run dev server

`npm run dev`

### 6. Visit locally

`http://localhost:3000`

<hr>
<br>

### Custom JSON Server for Books, Categories & Announcements

- [JSON server repository](https://github.com/tawhidzihad/booklend-json-server)

Categories: https://booklend-json-server.onrender.com/categories
<br>
Books: https://booklend-json-server.onrender.com/books
<br>
Announcements: https://booklend-json-server.onrender.com/announcements

<hr>
<br>

### Environment Variables

- BETTER_AUTH_SECRET=your_secret_key
- BETTER_AUTH_URL=http://localhost:3000 `Base URL of your app`
- NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000 `Base URL of your app`
- MONGODB_URI=your_mongodb_connection_string

<hr>
<br>

## Visit: https://book-lend-ten.vercel.app/
