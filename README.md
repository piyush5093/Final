# Advanced MERN Portfolio

A stylish portfolio web app built with the MERN stack architecture:

- **MongoDB + Mongoose** model for portfolio content
- **Express + Node API** for serving profile data
- **React + Vite frontend** with modern glassmorphism UI and Framer Motion animations

## Run locally

```bash
npm install
npm run dev
```

Frontend: `http://localhost:5173`  
Backend: `http://localhost:5000`

## Optional MongoDB

Create `server/.env`:

```bash
MONGO_URI=your_mongodb_connection_string
MONGO_DB=portfolio
PORT=5000
```

If MongoDB is not configured, the backend automatically serves fallback portfolio data.
